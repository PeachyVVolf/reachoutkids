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
          console.log(res.data);
          setPosts(res.data);
          console.log(posts);
      };
      fetchPosts();
  },[])
  return (
    <Fragment>
        <div className='col-12 blogImgContainer'>
        <img src={blogImg} />
        </div>
        {Array.isArray(posts) && (
          <Fragment>
            {
              posts.forEach(post => (
                <Link className='allBlogsLink' to={`/blog/${post._id}`}><Blog post={post} /></Link>
                )
              )
            }
          </Fragment>
        )}
        <DonateBar/>
    </Fragment>
  )
}

export default AllBlog