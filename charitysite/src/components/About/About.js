import React, { Fragment } from 'react';
import './About.css';
import VisionImg from '../../images/childwithbaby.jpg';
import DonateBar from '../layout/DonateBar/DonateBar';

const About = () => {
    return (
        <Fragment>
            <div className='row aboutUsHeading'>
                <h1>Our Vision</h1>
            </div>
            <div className='row aboutUsBody'>
                <div className='col-md-5 col-sm-12'>
                    <img src={VisionImg} />
                </div>
                <div className='col-md-7 col-sm-12'>
                    <p>Majority of street Children who did not attend or complete school are unable to read, 
                        write or count.   ROSK works with a network of local partners to ensure every child 
                        has access to Food, Healthcare, an education or vocational training especially in low 
                        resource environments and also during emergencies. Our interventions are integrated, 
                        coupling change for children alongside increasing the capacity of caregivers, communities 
                        and schools to support sustainable, long term change. We are passionate about ensuring 
                        that every Street connected kid is provided with at least one cooked nutritional meal a 
                        day. Working to ensure children are safe, in school and learning is a priority at ROSK. 
                        We envision a society where every child, especially street-connected children can access 
                        their full rights, regardless of their background or race. 
                    </p>
                </div>
            </div>
            <div className='row aboutUsHeading'>
                <h1>About Us</h1>
            </div>
            <div className='row aboutUsBody'>
                <p><strong>Reach Out Street Kids</strong> is an international NGO (Non- Governmental organisation) 
                    that works to restore hope in street-connected children by providing for their 
                    education, welfare and training. The vulnerability of street-connected children 
                    is the reason for the existence of Reach Out Street Kids <strong>(ROSK)</strong>. We are convinced 
                    that street-connected children face more hardships than the average child in Ghana
                    and globally. Their vulnerability is a driver to social vices which in turn impacts
                    negatively on economies in both the developed South and the mostly developing North.
                </p>
            </div>
            <DonateBar/>
        </Fragment>
    )
}

export default About;