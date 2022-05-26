import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import axios from 'axios';
import './Admin.css';

const Posts = () => {  
    const [posts, setPosts] = useState([]);
  
    const deletPost = async (id) => {
        await axios.delete(`https://reachoutkids.herokuapp.com/post/${id}`)
    }

    useEffect(()=>{
      const fetchPosts = async () => {
          const res = await axios.get("https://reachoutkids.herokuapp.com/post");
          await setPosts(res.data);
      };
      fetchPosts();
  },[posts])

  return (
    <Fragment>
    {localStorage.getItem('admin') ? (
            <Fragment>
                <div className='allAdmin'>
                    <h1>All Posts</h1>
                    <br/><br/>
                    <Link className='allPostHeading' to='/blog/add'>Add Blog</Link>
                    <div className='row'>
                    </div>
                    {posts.map(post => (
                        <Fragment>
                        <Blog post={post} />
                        <div className='allSinglepostEdit'>
                            <i onClick={() => deletPost(post._id)} className="allSinglepostIcon fa-solid fa-trash"></i>
                        </div>
                        </Fragment>
                    ))}
                </div>
            </Fragment>
        ) : (
            <Fragment>
                {window.location.replace("/")}
            </Fragment>
        )}
    </Fragment>
  )
}

export default Posts;