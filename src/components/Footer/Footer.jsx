import React from 'react'
import './footer.css'
import gitHub from '../../image/github.png'
import instgram from '../../image/instagram.png'
import linkeDin from '../../image/linkedin.png'
import logo from '../../image/logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
       <hr />
       <div className="footer">
         <div className="social-links">
            <img src={gitHub} alt="" />
            <img src={instgram} alt="" />
            <img src={linkeDin} alt="" />
         </div>
         <div className="logo">
          <img src={logo} alt="logo"/>
         </div>
       </div>
       <div className="blur footer-blor1"></div>
       <div className="blur footer-blor2"></div>
    </div>
  )
}

export default Footer
