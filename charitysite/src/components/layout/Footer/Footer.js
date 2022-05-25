import React, { Fragment } from 'react';
import './Footer.css';
import ReachOutLogo from '../../../images/Reach_out_logo.png';
import { FacebookOutlined, Twitter, Instagram, LinkedIn,PhoneAndroid, Email, LocationOn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Fragment>
        <br/><br/>
        <div className='footerMain'>
            <div className='row'>
                <div className='col-md-4 col-sm-12 leftFooter'>
                    <h3>Contact Us</h3>
                    <br/>
                    <ul>
                        <li>{<LocationOn />}<strong>Ghana Office</strong></li>
                        <li>1 Pig Farm Lane</li>
                        <li>Kotobaabi Abavana Down</li>
                        <li>Accra</li>
                        <br/>
                        <li>{<PhoneAndroid />} +233 203973435</li>
                        <br/>
                        <li>{<Email />} reachoutstreetkids@gmail.com</li>
                        <br/>
                        <li>{<LocationOn />}<strong>UK Contact</strong></li>
                        <li>{<PhoneAndroid />} +44 (0) 7535996957 </li>  
                        <li>{<Email />} anna.vanderpuye@reachoutstreetkids.org</li>
                    </ul>
                </div>
                <div className='col-md-4 col-sm-12 midFooter'>
                    <img src={ReachOutLogo} width="250px" />
                    <h1>Reach Out Street Kids</h1>
                </div>
                <div className='col-md-4 col-sm-12 rightFooter'>
                    <h3>Follow Us</h3>
                    <br/>
                    <ul>
                        <li>
                            <a href='https://www.instagram.com/reachoutstreetkids/'>{<Instagram />} reachoutstreetkids</a>
                        </li>
                        <br/>
                        <li>
                            <a href='https://www.facebook.com/profile.php?id=100079992924557'>{<FacebookOutlined/>} Reach Out Street Kids </a>
                        </li>
                        <br/>
                        <li>
                            <a href='https://twitter.com/ReachOutStreet'>{<Twitter/>} ReachOutStreet</a>
                        </li>
                        <br/>
                        <li>
                            <a href='https://www.linkedin.com/in/reachout-streetkids-b50405237/'>{<LinkedIn/>} reachout streetkids</a>
                        </li>
                    </ul>
                </div>
            </div>
            <br/>
            <div className='row'>
                <p>Copyright ReachOutStreetKids &copy;2022</p>
            </div>
        </div>
    </Fragment>
  )
}

export default Footer;