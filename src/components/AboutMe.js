import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutMe.css';
import profile from '../images/profile_pic.jpg'
import petSpin from '../images/pet-spin.gif'
import broccoli from '../images/broccoli.gif'
import python from '../images/python.webp'
import corgi from '../images/corgi.gif'
import language from '../images/language.gif'

import EastSharpIcon from '@mui/icons-material/EastSharp';
import Footer from './Footer';


const AboutMe = () => {
    let navigate = useNavigate()

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

        <div className='skills'>
            <h1>Skills</h1>

            <ul class="skill-bars">
               <li>
                  <div class="progress percent90"><span>90%</span></div>
                  <strong>React/JS</strong>
               </li>
               <li>
                  <div class="progress percent90"><span>90%</span></div>
                  <strong>MySQL/PostgreSQL</strong>
               </li>
               <li>
                  <div class="progress percent80"><span>80%</span></div>
                  <strong>Python</strong>
               </li>
               <li>
                  <div class="progress percent75"><span>75%</span></div>
                  <strong>C++</strong>
               </li>
               <li>
                  <div class="progress percent75"><span>75%</span></div>
                  <strong>Java</strong>
               </li>
               <li>
                  <div class="progress percent70"><span>70%</span></div>
                  <strong>Golang</strong>
               </li>
               <li>
                  <div class="progress percent70"><span>70%</span></div>
                  <strong>Pandas</strong>
               </li>
               <li>
                  <div class="progress percent70"><span>70%</span></div>
                  <strong>Spring Framework</strong>
               </li>
               <li>
                  <div class="progress percent50"><span>50%</span></div>
                  <strong>Ruby On Rails</strong>
               </li>
               <li>
                  <div class="progress percent50"><span>50%</span></div>
                  <strong>React Native</strong>
               </li>
            </ul>

            <div className='skills-text'>
                I have a lot of experience with full stack web development, especially in React. I have also
                had experience in machine learning with Python and Pandas. I really like software development and 
                have a wide range of technical experinece. Above are highlights of my technical skills. You can also learn more about my 
                experience in the resume section.&nbsp;
                <nobr className='more-here' onClick={() => {navigate("/experience"); window.scrollTo(0,0);} }>
                    <u>Learn more here</u>
                    <EastSharpIcon className='east-icons' />
                </nobr>
            </div>



            <div className='line'></div>
        </div>


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
            <div className='fun-facts-prompt'>
                <img className="pet" src={language} alt="Cute Pet" />
                <div className='bubble-left'> I speak fluent Chinese, English and some fuzhounese.</div>
            </div>
            
        </div>
        <p className='bottom-spacing'></p>
        
        <Footer/>
    </div>
  );
};

export default AboutMe;
