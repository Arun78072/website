import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
 const Footer = ()=> {
     return(
         <>
         <div className="footer_sec">
            <div className="container">
                <div className="footer_section">
                    <div> 
                        <div className="app_logo">LOGO</div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                    <div>
                        <h2>Get Help</h2>
                        <ul>
                            <li>Item 1 </li>
                            <li>Item 2 </li>
                            <li>Item 3 </li>
                            <li>Item 4 </li>
                            <li>Item 5 </li>
                        </ul>
                    </div>
                    <div>
                        <h2>About us</h2>
                        <ul>
                            <li>Item 1 </li>
                            <li>Item 2 </li>
                            <li>Item 3 </li>
                            <li>Item 4 </li>
                            <li>Item 5 </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Social Icons</h2>
                        <ul className='social_icon'>
                            <li><FiFacebook /></li>
                            <li><FiInstagram /> </li>
                            <li><FiTwitter /></li>
                            <li><FiYoutube /></li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
         </>
     )
     }
 export default Footer;