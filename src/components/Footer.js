import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <h3> I'd Love To Connect With You!</h3>
        <div className="socialMedia">
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/christine-lin-9a0155189/')}/>
            <GitHubIcon onClick={() => window.open('https://github.com/christinealin7771')}/>
            <EmailIcon onClick={() => window.location = 'mailto:christinelin.7771@gmail.com'}/>
            <InstagramIcon onClick={() => window.open('https://www.instagram.com/christine_linn_/')}/>
        </div>
        <p> &copy; 2023 Christine Lin</p>
    </div>
  )
}

export default Footer