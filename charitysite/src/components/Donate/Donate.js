import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Donate.css';

const Donate = () => {

  const [payment, setPayment] = useState(0.00);
  const navigate = useNavigate();

  const changePayment = (e) => {
    setPayment(e.target.value);
  }
  const handleDonate = () => {
    navigate(`/payment/${payment}`);
  }
  
  return (
    <Fragment>
        <br/>
        <div className='row'>
            <h1>Donate</h1>
        </div>
        <br/>
        <Fragment>
          <div className='row paymentInput'>
            <div className='col-12'>
              <input 
                onChange={changePayment}
                placeholder="Enter Amount"
              />
            </div>
          </div>
        </Fragment>
        <div className='row paypalRow'>
          <div className='col-12'>
            <button onClick={handleDonate}>Donate</button>
          </div>
        </div>
    </Fragment>
  )
}

export default Donate;