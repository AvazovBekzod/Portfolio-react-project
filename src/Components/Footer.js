import React from 'react';
import {FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Bekzod Avazov</h4>
      <h4>Copyright &copy; 2024 </h4>
      <div className='footerLinks'>
        <a href="https://github.com/AvazovBekzod" target='_blank'><FaGithub/></a>
      </div>
    </footer>
  )
}

export default Footer