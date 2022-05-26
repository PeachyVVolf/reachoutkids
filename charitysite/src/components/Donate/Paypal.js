import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Donate.css';
import axios from 'axios';

const Paypal = () => {

    const paypal = useRef();
    
    const params = useParams();

    const [clientId, setClientId] = useState()

    useEffect(() => {
        const setID = async () => {
            const data = await axios.get('https://reachoutkids.herokuapp.com/client');
            setClientId(data.data[0].clientID)
        }
        setID();

        window.paypal.Buttons({
        createOrder: (data, actions, error) => {
            return actions.order.create ({
            intent: "CAPTURE",
            purchase_units: [
                {
                description: "Donation",
                amount: {
                    currency_code: "GBP",
                    value: params.cost
                }
                }
            ]
            })
        },
        onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log("Successful order:" + order);
        },
        onError: (err) => {
            console.log(err);
        }
        }).render(paypal.current);
    }, [clientId])

    return (
        <div className='paypalRow'>
        <script src={`https://www.paypal.com/sdk/js?client-id=${clientId}&currency=GBP`}></script>
            <div ref={paypal}></div>
        </div>
    )
}

export default Paypal