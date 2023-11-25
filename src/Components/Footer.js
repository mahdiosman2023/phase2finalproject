import React from 'react'
import { Instagram } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import '../Styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram />
            <Facebook />
            <Twitter />
        </div>
        <p>&copy; 2023 nomadspizza.com</p>
    </div>
  )
}

export default Footer;
