import React from 'react';
import './AboutMe.css';
import profile from '../images/profile_pic.jpg'
import petSpin from '../images/pet-spin.gif'
import broccoli from '../images/broccoli.gif'
import python from '../images/python.webp'
import corgi from '../images/corgi.gif'
import Footer from './Footer';

const AboutMe = () => {
  return (

    <div className='about-me'>
        {/* <div className='about-me-content'>
            <h1>About Me</h1>
        
        </div> */}
        <div className='about-me-prompt'>
            <img src={profile} alt="Avatar"/>
            <div className='text'>
                <h1>
                    Hi! I'm Christine! <br/>I'm a Computer Science Student aspiring to Work in Tech!
                </h1>
                <p>
                    I am currently get my bachelor's degree in Computer Science at the University of Florida
                    with a Chinese minor. I started programming the summer before my senior year in high 
                    school. It initally started out as just a curiousity. However I didn't expect it 
                    would grow to be my passion.
                </p>
            </div>
        </div>
        <div className='line'></div>

        <div className='fun-facts'>
            <h1>Fun Facts About Me!</h1>
            <div className='fun-facts-prompt'>
                <img className="pet" src={petSpin} alt="Cute Pet" />
                <div className='bubble-left'>I'm a cat person!</div>
            </div>
            <div className='fun-facts-prompt'>
                <div className='bubble-right'> I love vegetables, especially broccoli. </div>
                <img className="pet-right" src={broccoli} alt="Cute Pet" />
            </div>
            <div className='fun-facts-prompt'>
                <img className="pet" src={python} alt="Cute Pet" />
                <div className='bubble-left'>My favorite leetcode language is Python!</div>
            </div>
            <div className='fun-facts-prompt'>
                <div className='bubble-right'> I may be a cat person, but I also love corgis! </div>
                <img className="pet-right" src={corgi} alt="Cute Pet" />
            </div>
            
        </div>
        <p className='bottom-spacing'></p>
        
        <Footer/>
    </div>
  );
};

export default AboutMe;
