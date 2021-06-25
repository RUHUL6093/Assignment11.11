import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const ourAddress = [
       
    ]
    const Location = [
        {name: "Dhaka" , link: "/emergency"},
        {name: "Khulna" , link: "/checkup"},
        {name: "Chittagong" , link: "/personal-treatment"},
        {name: "Rajshahi" , link: "/tooth-extract"},
        {name: "Rangpur" , link: "/checkup"},
        {name: "Dinajpur" , link: "/checkup"}
    ]
    const services = [
        {name: "Exterior Washing" , link: "/washing"},
        {name: "Interior Washing" , link: "/washing"},
        {name: "Engine Service" , link: "/service"},
        {name: "Diagnostic Tests" , link: "/test"},
        {name: "Vacuum Cleaning" , link: "/vacuum"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={2} menuTitle="Location" menuItems={Location}/>
                    <FooterCol key={3} menuTitle="Contact Information" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">01723456789</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;