import React, { Fragment, useEffect, useState } from 'react';
import './Admin.css';
import Posts from './Posts';
import axios from 'axios';

const Admin = () => {
    const [clientId, setClientId] = useState("");

    useEffect(() => {
        const changeClient = async () => {
            const client = await axios.get('https://reachoutkids.herokuapp.com/client');
            await setClientId(client.data[0].clientID);
        }
        changeClient();
    }, []);

    const changeID =  () => {
        axios.put('/client', {
            clientID: clientId
        })
    }
    return (
        <Fragment>
            {localStorage.getItem('admin') ? (
                <Fragment>
                    <form onSubmit={changeID}>
                        <label>PayPal Client ID</label>
                        <input placeholder='Enter new Client ID' onChange={e => setClientId(e.target.value)} />
                        <button type='submit'>Change ID</button>
                    </form>
                    <Posts/>
                </Fragment>
            ) : (
                <Fragment>
                    {window.location.replace("/")}
                </Fragment>
            )}
        </Fragment>
    )
}

export default Admin;