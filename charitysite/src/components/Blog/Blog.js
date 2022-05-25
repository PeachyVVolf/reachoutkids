import React, { Fragment } from 'react';
import './Blog.css';

const Blog = ({post}) => {
  const PF = 'https://reach-out-street-kids.herokuapp.com/images/';
  return (
    <Fragment>
        <div className='row blog'>
            <div className='row allBlogHeading'>
                <h1>{post.title}</h1>
            </div>
            <div className='row allBlogBody'>
              
              <div className='col-md-6 col-sm-12 allBlogImgContainer'>
                {post.photo && <img src={PF + post.photo} />}
              </div>
              <div className='col-md-6 col-sm-12'>
                <p>
                  {post.desc}
                  </p>
              </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Blog;