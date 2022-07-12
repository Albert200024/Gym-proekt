import React from 'react'
import Header from '../Header/Header'
import './css/hero.css'
import './css/heroMedia.css'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
import hero_image from '../../image/hero_image.png'
import hero_image_back from '../../image/hero_image_back.png'
import heart from '../../image/heart.png'
import calories from '../../image/calories.png'

const Hero = () => {
  const transition = {type:"string", duration:2}
  const mobile = window.innerWidth <= 768 ? true:false

  const x = window.innerWidth <= 1175 ? true : false
  const y = window.innerWidth <= 860 ? true : false
  return (
    <div className='hero' id="home"> 
        <div className="blur hero-blur"></div>
        <div className="left-h">
             <Header/>

             <div className='the-best-ad'>
                  <motion.div
                     initial={{left:mobile ? "178px" : "220px"}}
                     whileInView={{left:"16px"}}
                     transition={{...transition, type:"tween"}}
                  >
                  </motion.div>
                  <span>the best fitnes club in the town</span>
             </div>

             <div className="hero-text">
                <div>
                  <span className='stroke-text'>Shape </span>
                  <span>Your</span>
                </div>
                <div>
                  <span>Ideal body</span>
                </div>
                <div>
                  <span>
                     In here we will help you to shape and build your ideal body and live up your life to fullest
                  </span>
                </div>
             </div>

             <div className="figures">
                 <div>
                     <span>
                        <NumberCounter end={140} start={100} delay='3' preFix = "+"/>
                     </span> 
                     <span>expert coachs</span> 
                  </div>
                 <div>
                      <span>
                        <NumberCounter end={978} start={800} delay='3' preFix = "+"/>
                      </span> 
                      <span>numbers joined</span>
                 </div>
                 <div>
                     <span>
                        <NumberCounter end={50} start={0} delay='3' preFix = "+"/>
                     </span> 
                     <span>fitnes progrms</span>
                 </div>
             </div>
                      
             <div className='hero-buttons'>
                <button className='btn'>Ger Started</button>
                <button className='btn'>Learn More</button>
             </div>
        </div>
        <div className="right-h">
            <button className='btn btn-h'>Join Now</button>
            
            <motion.div
               initial={{right:"-1rem"}}
               whileInView={{right:"4rem"}}
               transition={transition} 
               className='heart-rate'>
               <img src={heart} alt=""/>
               <span>Heart Rate</span>
               <span>116 bpm</span>
            </motion.div>
           
            <img src={hero_image} alt = "" className='hero-image'/>
          
        
            <motion.div 
                initial={{right:"5rem"}}
                whileInView={{right: x ? "20rem" : '25rem'}}
                transition={transition}
                className='colories'>
                <img src={calories} alt=""/>
                <div>
                   <span>Calories Burned</span>
                   <span>220 kcal</span>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

 export default Hero
