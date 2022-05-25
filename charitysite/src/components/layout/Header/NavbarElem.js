import React, { Fragment, useState } from 'react';
import './NavbarElem.css';
import ReachOutLogo from '../../../images/Reach_out_logo.png';
import { FacebookOutlined, Twitter, Menu, Instagram, LinkedIn } from '@mui/icons-material';

const NavbarElem = () => {

  const [openNav, setOpenNav] = useState(false)
  const openSideNav = () => {
    setOpenNav(!openNav);
  }

  return (
    <div>
      <div className="topNav py-3 top-bar shadow d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 text-md-right pl-0">
              <a href="/" className=" pr-3 p-3">Home</a>
              <a href="/donate" className="p-3">Donate</a>
            </div>
            <div className="col-lg-6 col-md-4 socialIconsTopNav">
              <a href='https://www.instagram.com/reachoutstreetkids/' className="p-3">{<Instagram />}</a>
              <a href="https://www.facebook.com/profile.php?id=100079992924557" className="p-3"><FacebookOutlined /></a>
              <a href="https://twitter.com/ReachOutStreet" className="p-3"><Twitter /></a>
              <a href='https://www.linkedin.com/in/reachout-streetkids-b50405237/' className="p-3">{<LinkedIn/>}</a>
            </div>
          </div>
        </div>
      </div>
      <header className="navBar">
        <div className="container">
          <div className="row">
            <Fragment>
              <div className='col-lg-4 col-md-11'>
                <div className='row logoContainer'>
                  <div className='col-3'>
                    <img src={ReachOutLogo} width="100px" />
                  </div>
                  <div className='col-9'>
                    <h1>REACH OUT STREET KIDS</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 navLinks">
                <a href="/" className=" pr-3 p-3">Home</a>
                <a href="/about" className="p-3">About Us</a>
                <a href="/team" className="p-3">Our Team</a>
                <a href="/donate" className="p-3">Donate</a>
                <a href="/blog" className="p-3">Blog</a>
              </div>
            </Fragment>
            {openNav === true ?
            <div className="mobileNav">
                <a href="/" className=" pr-3 p-3">Home</a>
                <a href="/about" className="p-3">About Us</a>
                <a href="/team" className="p-3">Our Team</a>
                <a href="/donate" className="p-3">Donate</a>
                <a href="/blog" className="p-3">Blog</a>
            </div>:(<Fragment></Fragment>)
            }
            <div className='col-1 menuIcon'>
              <Menu onClick={openSideNav} />
            </div>

          </div>
        </div>
      </header>
    </div>
  )
}

export default NavbarElem;