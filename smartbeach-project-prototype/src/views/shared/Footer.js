import React from "react";
import facebook from '../../assets/images/facebook-icon.png'; 
import instagram from '../../assets/images/instagram-icon.png';
import twitterX from '../../assets/images/twitter-X-icon.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-line-one"> 
                <ul className="footer-nav">
                    <li><a href="/forecast">Forecast</a></li>
                    <li><a href="/live">Today's Prediction</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
                <ul className="SNS-icon">
                    <li><button><img src={facebook} alt="Facebook-Logo" id="facebook" /></button></li>
                    <li><button><img src={instagram} alt="Instagram-logo" id="instagram" /></button></li>
                    <li><button><img src={twitterX} alt="TwitterX-logo" id="twitter" /></button></li>
                </ul>
            </div>
            <p>2024 by Deep Sea Coders</p>
        </div>
    );
}

export default Footer;
