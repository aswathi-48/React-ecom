import React from 'react'
import logo from '../../utils/image/Untitled_design-removebg-preview.png';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
         <footer className="container">
         <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className='list'>
            <p>Home</p>
            <p>About</p>
            <p>Contact Us</p>
        </div>
            <div className="footer-contents">
                <p className="footer-para1">
                    Copyright © 2023 Shopy
                </p>
                <p className="col-lg-6 col-md-12">Terms & Conditions</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer