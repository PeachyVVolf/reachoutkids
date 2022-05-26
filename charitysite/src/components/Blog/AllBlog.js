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
          const res = await axios.get("/post");
          setPosts(res.data);
      };
      fetchPosts();
  },[])
  return (
    <Fragment>
        <div className='col-12 blogImgContainer'>
        <img src={blogImg} />
        </div>
        {posts.length <= 0 || posts === undefined ? (
          <div>Loading...</div>
        ):(
          <Fragment>
            {posts.forEach(post => (
              <Link className='allBlogsLink' to={`/blog/${post._id}`}><Blog post={post} /></Link>
            ))}
          </Fragment>
        )}
        <DonateBar/>
    </Fragment>
  )
}

export default AllBlog