import React, { useState, Fragment, useEffect } from 'react';
import Blog from './Blog';
import blogImg from '../../images/blogImg.jpg';
import axios from 'axios';
import './Blog.css';
import { Link } from 'react-router-dom';
import DonateBar from '../layout/DonateBar/DonateBar';

const AllBlog = () => {  
    const [posts, setPosts] = useState([]);
  
    useEffect(()=>{
      const fetchPosts = async () => {
          const res = await axios.get("https://reachoutkids.herokuapp.com/post");
          // console.log(res.data);
          setPosts(res.data);
          console.log(posts.length);
      };
      fetchPosts();
  },[posts])
  return (
    <Fragment>
        <div className='col-12 blogImgContainer'>
        <img src={blogImg} />
        </div>
        {posts.length >= 0 ? (
          <Fragment>
            {
              posts.forEach(post => (
                <Link className='allBlogsLink' to={`/blog/${post._id}`}><Blog post={post} /></Link>
                )
              )
            }
          </Fragment>
        ):(
          <div><h1>Loading...</h1></div>
        )}
        <DonateBar/>
    </Fragment>
  )
}

export default AllBlog