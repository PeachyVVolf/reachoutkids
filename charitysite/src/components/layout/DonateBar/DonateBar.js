import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DonateBar.css';

const DonateBar = () => {
  const navigate = useNavigate();
  const submitDonate = () => {
    navigate("/donate");
  }
  return (
    <div className='row donateBar'>
        <div className='row donateBarInside'>
            <div className='col-md-9 col-sm-12'>
                Help the Children
            </div>
            <div className='col-md-3 col-sm-12'>
                <button onClick={submitDonate}>Donate Now</button>
            </div>
        </div>
    </div>
  )
}

export default DonateBar;