import React, { useState } from 'react'
import './css/headerMedia.css'
import './css/header.css'
import logo from '../../image/logo.png'
import bars from '../../image/bars.png'
import {Link} from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true: false
  const [menuOpen, setMenuOpen] = useState(false)
  return ( 
    <div className='header'>
        <img src={logo} alt="" className='logo'/>
        {(menuOpen === false && mobile === true) ? 
           (<div
              style={{
                backgroundColor:'#363D42', 
                padding:"0.5rem", 
                borderRadius:"5px"
              }}      
              onClick={() => setMenuOpen(true)}
            >
                <img src={bars} alt="" style={{width:'1.5rem', height:'1.5rem'}}/>
            </div>) :
            (
            <ul className='header-menu'>
               <li>
                  <Link
                     to='home'
                     span={true}
                     smooth = {true}
                     onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
               </li>
               <li onClick={() => setMenuOpen(false)}>
                  <Link
                          onClick={() => setMenuOpen(false)}
                          to='Programs'
                          span={true}
                          smooth={true}
                  >Programs
                  </Link>
              </li>
               <li onClick={() => setMenuOpen(false)}>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to='Reasons'
                    span={true}
                    smooth={true}
                   >Why us</Link>
              </li>
              <li>
                  <Link 
                    onClick={() => setMenuOpen(false)}
                    to='plans'
                    span={true}
                    smooth={true}
                  >Plans
                  </Link>
              </li>
              <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to='testimonials'
                    span={true}
                    smooth = {true}
                  >Testimonials</Link>
              </li>
            </ul>
            )
        }
    </div>
  )
}

export default Header
