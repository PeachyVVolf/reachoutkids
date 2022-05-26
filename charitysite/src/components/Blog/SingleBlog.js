import React, { Fragment, useState, useEffect } from 'react';
import './Blog.css';
import { useLocation } from 'react-router-dom';
import DonateBar from '../layout/DonateBar/DonateBar';
import axios from 'axios';

const SingleBlog = () => {
  const PF = 'https://reachoutkids.herokuapp.com/images/';
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  const [data, setData] = useState({});

  useEffect(()=>{
      const getPost = async () => {
          const res = await axios.get(`https://reachoutkids.herokuapp.com/post/${pathId}`);
          await setData(res.data);
      }
      getPost();
  },[pathId])

  return (
    <Fragment>
        <div className='row blog'>
            <div className='row blogHeading'>
                <h1>{data.title}</h1>
            </div>
            <div className='row blogBody'>
              
              <div className='col-md-6 col-sm-12 blogImgContainer'>
                {data.photo && <img src={PF + data.photo} />}
              </div>
              <div className='col-md-6 col-sm-12'>
                <p>
                  {data.desc}
                  </p>
              </div>
            </div>
            <DonateBar />
        </div>
    </Fragment>
  )
}

export default SingleBlog;