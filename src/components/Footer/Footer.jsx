import React from "react"; 
import images from "../../constants/images";
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './footer.css';

const Footer = ()=> (

  <div className="app__footer">     
    <div>
             <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
      <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>   
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Abdullah-Azzohry. All Rights reserved.</p>
    </div>
    </div>


);

export default Footer;
