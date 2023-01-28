import React from 'react'
import "./footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const footer = () => {
  return (
   <footer id='footer'>
    <a href="/" className='footer__logo'>FILM CATCH</a>
  
    <div className="footer__socials">
      <a href="https://sanjanaprabha.netlify.app/">Made By Sanjana Prabha</a>
      <a href="https://www.linkedin.com/in/sanjana-prabha-692764220/"><LinkedInIcon/></a>
      <a href="https://github.com/Sanjanaprabha" target="#_blank"><GitHubIcon /></a>
    </div>

    <div className="footer__copyright">
        <small>&copy;Film Catch.All rights reserved</small>
    </div>
   </footer>
  )
}

export default footer 