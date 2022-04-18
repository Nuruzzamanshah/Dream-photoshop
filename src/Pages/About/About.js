import React from 'react';
import './About.css';
import nuru from '../../images/socail/nuru.jpg';

const About = () => {
    return (
        <div>
            <div className="card">
                <img src={nuru} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">MD. Nuruzzaman</h5>
                    <p className="card-text">I want to be a Front-End Developer <br></br> I want to do my best so that I can be a good quality Front-End Developer <br></br> I have been doing this for a long time and keep working until I can succeed and I will try to make my dream come true!</p>
                    <a href="" className="btn">Know More</a>
                </div>
            </div>
        </div>
    );
};

export default About;