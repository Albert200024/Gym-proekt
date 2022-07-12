import React from 'react'
import './css/plans.css'
import './css/planMedia.css'
import whiteTick from '../../image/whiteTick.png'
import {plansData} from '../../data/plansData'

const Plans = () => {
  return (
    <div className='plans-container' id='plans'>
     <div className="blur plans-blur-1"></div>
     <div className="blur plans-blur-2"></div>
        <div className="parograms-header" style={{gap:'2rem'}}>
             <span className='stroke-text'>READY TO START</span>
             <span>YOUR JOURNEY</span>
             <span className='stroke-text'>NOW WITHUS</span>
        </div>

        <div className="plans">
             {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                     {plan.icon}
                     <span>{plan.name}</span>
                     <span>$ {plan.price}</span>

                     <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className="feature" key = {i}>
                                 <img src={whiteTick} alt=""/>
                                 <span>{feature}</span>
                            </div>
                        ))}
                     </div>
                     <div>
                        <span>See more benefits </span>
                    </div>
                    <button className='btn'>Join now</button>
                </div>
             ))}
        </div>
    </div>
  )
}

export default Plans
