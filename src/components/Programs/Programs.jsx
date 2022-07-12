import React from 'react'
import './css/programs.css'
import './css/programMedia.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../image/rightArrow.png'

const Programs = () => {
   const font = window.innerWidth <= 929 ? true: false
  return (
    <div className='programs' id="Programs">
         <div className="parograms-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
         </div>

         <div className="program-categories">
             {programsData.map((program, index) => (
                 <div className='category' key={index}>
                       {program.image}
                       <span style={{fontSize:font ? "1rem" : '1rem'}}>{program.heading}</span>
                       <span >{program.details}</span>
                       <div className="join-now">
                          <span>Join Now</span>
                          <img src={RightArrow} alt=""/>
                       </div>
                 </div>
             ))}
         </div>
    </div>
  )
}

export default Programs
