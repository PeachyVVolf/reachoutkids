import React, { Fragment, useState } from 'react';


const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);
        try {
            if(username === "admin.reachoutkids.54398" && password === "23969bd6&*(89DA9B2)234Y"){
                localStorage.setItem("admin", "true");
                window.location.replace("/adminpanel");
            }
        } catch (error) {
            setError(true);
        }
    }

    return (
        <Fragment>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>Email</label>
                <input className='loginInput' type='text' placeholder='Enter your Username...' onChange={e => setUsername(e.target.value)}/>
                <label>Password</label>
                <input className='loginInput' type='password' placeholder='Enter your Password...' onChange={e => setPassword(e.target.value)}/>
                <button className='loginButton' type='submit'>Login</button>
                {error && <span style={{color:'red'}}>Only Admin can login.</span>}
            </form>
        </Fragment>
    )
}

export default AdminLogin;