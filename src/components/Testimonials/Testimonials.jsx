import React from 'react'
import leftArrow from '../../image/leftArrow.png'
import rightArrow from '../../image/rightArrow.png'
import './css/testimonials.css'
import './css/testemonialsMedia.css'
import {testimonialsData} from '../../data/testimonialsData'
import { useState } from 'react'
import {motion} from 'framer-motion'

const Testimonials = () => {
  const [selectid, setSelectid]= useState(0)
  const tLength = testimonialsData.length;

  const transition = {type:"string", duration:2}
  
  const next = function(){
     selectid === 0 ? setSelectid(tLength - 1):
                      setSelectid((sel) => sel - 1)
  }

  const back = function(){
    selectid === tLength - 1 ? setSelectid(0):
                               setSelectid((sel) => sel + 1)
  }
  return (
    <div className='testimonials'>
        <div className="left-t">
            <span>TESTIMONIALS</span>
            <span className='stroke-text'>WHAT THEY</span>
            <span>SAY ABOUT US</span>
            <motion.span
                    key={selectid}
                    initial={{opacity:0, x:100}}
                    animate={{opacity:1, x: 0}}
                    exit={{opacity:0, x:-100}}
                    transition={transition}> 
                 {testimonialsData[selectid].review  }
            </motion.span>
            <span>
                <span style={{color:'#f48915'}}>
                    {testimonialsData[selectid].name}
                </span>{" "}
                 - {testimonialsData[selectid].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div
              initial={{opacity:0, x:-100}}
              transition={{...transition, duration:2}}
              whileInView={{opacity:1, x:0}}
            > 
            </motion.div>
            <motion.div
                initial={{opacity:0, x:-100}}
                transition={{...transition, duration:2}}
                 whileInView={{opacity:1, x:0}}
            >
            </motion.div>
            <motion.img 
              key={selectid}
              initial={{opacity:0, x:100}}
              animate={{opacity:1, x: 0}}
              exit={{opacity:0, x:-100}}
              transition={transition}
              src={testimonialsData[selectid].image} alt=""/>
            
            <div className='arrows'>
                <img onClick={next} src={leftArrow} alt=""/>
                <img onClick={back} src={rightArrow} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
