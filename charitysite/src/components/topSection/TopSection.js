import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderImg1 from '../../images/Landing page photo.jpg';
import DonateBar from '../layout/DonateBar/DonateBar';
import './TopSection.css';

const TopSection = () => {

  const navigate = useNavigate();
  const handleDonate = () => {
    navigate("/donate");
  }
  return (
    <Fragment>
        <div className='row topSectionImgWrapper'>
            <img className='topSectionImg' src={HeaderImg1} />
        </div>
        <div className='topSectionHeadline'>
            <h1>Eve<span>ry child</span> matt<span>ers, including street kids</span></h1>
            <button onClick={handleDonate}>Donate Now</button>
        </div>
        <div className='row newsBar'>
          <p></p>
        </div>
        <div className='row newsBar'>
          <p><a href='https://tinyurl.com/reachoutkids'>Click here to read about how children beg to feed 
          houses and how you can help them.</a></p>
        </div>
        <div className='row mission'>
          <div className='col-3'>
            <h1>Our Mission</h1>
          </div>
          <div className="col-1 missionLottie">
            <lottie-player 
              src="https://assets2.lottiefiles.com/packages/lf20_jcyhxkau.json" 
              background="transparent"  
              speed="1"
              loop  
              autoplay
            ></lottie-player>
          </div>
          <div className='col-8'>
            <p>To raise awareness and empathy about the living standards of street-connected 
              children thereby gathering support for their incorporation into society so they 
              can reach their fullest potential. 
            </p>
          </div>
        </div>
        <div className='row campaignHeading'>
          <div className="col-3 campaignLottie">
            <lottie-player 
              src="https://assets6.lottiefiles.com/packages/lf20_eUXWk4.json" 
              background="transparent"  
              speed="1"
              loop  
              autoplay
            ></lottie-player>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='row'>
              <h1>Our Campaigns</h1>
            </div>
            <br/><br/>
            <div className='row campaigns'>
              <div className='col-md-3 col-sm-12'>Policy Level Advocacy</div>
              <div className='col-md-3 col-sm-12'>Social Media Advocacy</div>
              <div className='col-md-3 col-sm-12'>Media Tour</div>
              <div className='col-md-3 col-sm-12'>Press Conference</div>
            </div>
          </div>
          <div className='col-3'></div>
        </div>
        <br/><br/>
        <div className='row projects'>
          <h1>Our Projects</h1>
          <div className="col-4 projectsLottie">
            <lottie-player 
              src="https://assets7.lottiefiles.com/packages/lf20_4syqy0rw.json" 
              background="transparent"  
              speed="1"
              loop  
              autoplay
            ></lottie-player>
          </div>
          <div className='col-8'>
            <div className='row'>
            </div>
            <br/><br/>
            <div className='row projectList'>
              <div className='col-md-4 col-sm-12'>Feeding programmes</div>
              <div className='col-md-4 col-sm-12'>Health talk and screening</div>
              <div className='col-md-4 col-sm-12'>Welfare outreaches</div>
            </div>
            <div className='row projectList'>
              <div className='col-md-4 col-sm-12'>Street Education Programmes</div>
              <div className='col-md-4 col-sm-12'>Mentorship Programmes</div>
              <div className='col-md-4 col-sm-12'>Skills/Vocational training</div>
            </div>
          </div>
        </div>
        <br/><br/>
        <div className='row donate'>
          <div className='donateDiv'>
          </div>
          
          <h1>Help the Street Kids Remain Safe, in School and Learning</h1>
          <h2>Donate What You Can</h2>
          <button>Donate Now</button>
        </div>
        <br/><br/>
        <div className='row mission'>
          <div className='col-3'>
            <h1>Our Focus</h1>
          </div>
          <div className='col-9'>
            <p>Children, and street-connected children, primarily are at the heart of 
              our actions because, children are the future of our society and it is 
              important to invest in them.  
            </p>
          </div>
        </div>
        <DonateBar/>
    </Fragment>
  )
}

export default TopSection;