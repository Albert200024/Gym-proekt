import React from 'react'
import './css/reasons.css'
import './css/reasonsMedia.css'

import image1 from "../../image/image1.png"
import image2 from "../../image/image2.png"
import image3 from "../../image/image3.png"
import image4 from "../../image/image4.png"
import nb from "../../image/nb.png"
import nike from "../../image/nike.png"
import adidas from "../../image/adidas.png"
import tick from "../../image/tick.png"


const Reasons = () => {
  return (
    <div className="reasons" id="Reasons">

      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="right-r">
        <span>some resasons </span>

        <div>
          <span className="stroke-text">why</span>
          <span>chose us?</span>
        </div>

        <div className='detail-r'>
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div> 
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        
        <span style={{
            color:'#9c9c9c',
            fontWeight:'normal'
            }}>
          OUR PARTNERS
        </span>
        
        <div className='partners'>
          <img src={nb} alt="" />
          <img src={nike} alt="" />
          <img src={adidas} alt="" />
        </div>

      </div>
    </div>
  );
}

export default Reasons
