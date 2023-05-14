import React from 'react';
import './Home.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'

import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <section className="home">
      <div className="about">
        <h2>Christine Lin</h2>
        <div className="prompt">
          <p>
           Computer Science Student at the University of Florida
          </p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/christine-lin-9a0155189/')}/>
          <GitHubIcon onClick={() => window.open('https://github.com/christinealin7771')}/>
          <EmailIcon onClick={() => window.location = 'mailto:christinelin.7771@gmail.com'}/>
        </div>
      </div>
      <ExpandCircleDownIcon className='circle-down-icon' onClick={() => {navigate("/about-me")}}/>
      <p className='additional'>Learn More About Me</p>

    </section>
    
  );
};

export default Home;
