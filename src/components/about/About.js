import React from 'react';
import './About.css'
import ME from '../../assets/react.gif'
import {FaAward} from "react-icons/fa"
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id={"about"}>
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className={"container about__container"}>
                <div className={"about__me"}>
                    <div className={"about__me-image"}>
                        <img src={ME} alt={"About Image"}/>
                    </div>
                </div>
                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <article className={'about__card'}>
                            <FaAward className={"about__icon"}/>
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className={'about__card'}>
                            <FiUsers className={"about__icon"}/>
                            <h5>Clients</h5>
                            <small>10+ Clients</small>
                        </article>
                        <article className={'about__card'}>
                            <VscFolderLibrary className={"about__icon"}/>
                            <h5>Projects</h5>
                            <small>20+ Projects</small>
                        </article>
                    </div>
                    <p>I am a Junior Full-Stack web developer with a particular taste for the MERN Stack.
Currently in preparation for a Bachelor's degree in computer science aside work time, I am delighted to learn different technologies and different concepts that I can implement on the various personal projects that I develop during my free time.
Very young in the sector, I am a real enthusiast so do not hesitate to come and discuss with me!</p>
                    <a href={"contact"} className={"btn btn-primary"}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About