import React from 'react';
import './Footer.css'
import {BsLinkedin, BsGithub} from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <a href={"#"} className={"footer__logo"}>Mohamed Kaouane</a>
            <ul className={"permalinks"}>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#experiences"}>Experiences</a></li>
                <li><a href={"#services"}>Services</a></li>
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#contact"}>Contact</a></li>
                <li><a href={"#testimonials"}>Testimonials</a></li>
            </ul>

            <div className={"footer__socials"}>
                <a href={"https://github.com/mkaouane"} target={"_blank"}><BsGithub /></a>
                <a href={"https://www.linkedin.com/in/mohamed-k-47b48a165/"} target={"_blank"}><BsLinkedin /></a>
            </div>

            <div className={"footer__copyright"}>
                <small>&copy; Mkaouane. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer