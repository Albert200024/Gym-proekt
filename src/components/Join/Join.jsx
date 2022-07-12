import React from 'react'
import { useRef } from 'react'
import "./css/join.css"
import './css/joinMedia.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tt9et2e', 'template_o4wfzqe', form.current, 'MBM3klBXMk2Kbs_Bx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='join' id="join-us">
       <div className="left-j">
        <hr />
         <div>
            <span className='stroke-text'>READY TO</span>
            <span> LEVEL UP</span>
         </div>
         <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'> WITH US?</span>
         </div>
       </div>
       <div className="right-j">
           <form ref={form} className="email-container" onSubmit={sendEmail}>
               <input type="email" name="user_email" placeholder='Enter you Email andress'/>
               <button onClick={sendEmail}className='btn btn-j'>Join Now</button>
           </form>
       </div>
    </div>
  )
}

export default Join
