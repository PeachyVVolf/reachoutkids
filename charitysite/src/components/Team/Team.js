import React, { Fragment } from 'react';
import AnnaImg from '../../images/TeamPics/Anna.jpg';
import SolomanImg from '../../images/TeamPics/Soloman.png';
import NigelImg from '../../images/TeamPics/Nigel.jpg';
import SarfohImg from '../../images/TeamPics/Sarfoh.jpeg';
import GetrudeImg from '../../images/TeamPics/Getrude.jpeg';
import './Team.css';

const Team = () => {
  return (
    <Fragment>
      <br/><br/>
      <div className='row'>
        <h1>Our Team</h1>
      </div>
      <br/><br/>
      <div className='row member'>
        <div className='col-1'></div>
        <div className='col-md-3 col-sm-12'>
          <img src={AnnaImg} alt="AnnaVanderpuye" />
          <p><strong>Founder and Chairman</strong> <br/> Dr. Anna Asher Vanderpuye</p>
        </div>
        <div className='col-md-7 col-sm-12 memberDetails'>
          <p>Dr. Anna Asher Vanderpuye is the Director of <strong>ROSK</strong>. Her passion for children is 
            exemplary and as a mother herself, she sees street children as treasures and 
            gifts the world must not reject. 
          </p>
        </div>
        <div className='col-1'></div>
      </div>
      <br/><br/>
      <div className='row member'>
        <div className='col-1'></div>
        <div className='col-md-3 col-sm-12'>
          <img src={SolomanImg} alt="Soloman" />
          <p><strong>Secretary</strong> <br/> Solomon Yamoah</p>
        </div>
        <div className='col-md-7 col-sm-12 memberDetails'>
          <p>Solomon Yamoah is an educationist who has much passion for children. He desires that 
            all children are not left behind, including street children who are equally potential 
            assets to the world.
          </p>
        </div>
        <div className='col-1'></div>
      </div>
      <br/><br/>
      <div className='row member'>
        <div className='col-1'></div>
        <div className='col-md-3 col-sm-12'>
          <img src={NigelImg} alt="Nigel" />
          <p><strong>International Development lead ( UK) </strong> <br/> Nigel Norrie</p>
        </div>
        <div className='col-md-7 col-sm-12 memberDetails'>
          <p>Nigel has a pedigree of helping many NGOs based in Africa develope their vision and achieve 
            their objectives for over 20 years. He is a grandfather and has a passion to alleviate the 
            suffering especially of indigent children.
          </p>
        </div>
        <div className='col-1'></div>
      </div>
      <br/><br/>
      <div className='row member'>
        <div className='col-1'></div>
        <div className='col-md-3 col-sm-12'>
          <img src={SarfohImg} alt="Sarfoh" />
          <p><strong>Acting Project Officer </strong> <br/> Sarfoh Danquah</p>
        </div>
        <div className='col-md-7 col-sm-12 memberDetails'>
          <p>Sarfo Danquah is a development communicator passionate about finding sustainable solutions 
            to societal ills. He believes street children deserve and can become more and of great benefit 
            to the world at large. 
          </p>
        </div>
        <div className='col-1'></div>
      </div>
      <br/><br/>
      <div className='row member'>
        <div className='col-1'></div>
        <div className='col-md-3 col-sm-12'>
          <img src={GetrudeImg} alt="Sarfoh" />
          <p><strong>Acting Project Officer </strong> <br/> Getrude Akunlibe</p>
        </div>
        <div className='col-md-7 col-sm-12 memberDetails'>
          <p>Getrude Akunlibe is a budding Computer Scientist who seeks to make impact in the lives of 
            children. She passionately considers that; street children need to be given equal opportunities 
            just like any other child.
          </p>
        </div>
        <div className='col-1'></div>
      </div>
    </Fragment>
  )
}

export default Team;