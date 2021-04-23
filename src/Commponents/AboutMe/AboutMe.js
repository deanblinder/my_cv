import React, {Component} from "react";
import './AboutMe.css'
import ReactRoundedImage from "react-rounded-image";
import {Col, Row} from "react-bootstrap";
import profilePic from './../../Assets/prof.jpg'
import Layout from "../Layout/Layout";
class AboutMe extends Component{
    render() {
        return (
            <div className='about'>
                    <div>
                        <ReactRoundedImage
                            image={profilePic}
                            roundedColor="white"
                            imageWidth="250"
                            imageHeight="250"
                            hoverColor="grey"
                            roundedSize="15"
                        />
                    </div>

                    <div className='textContainer'>
                    <h1 style={{margin:'0'}}>Hello,</h1>
                    <h2 style={{margin:'0'}}>a bit about me</h2>
                    <p style={{fontSize:'20px'}}>
                        Software and Information Systems Engineering Student
                        Third year Software and Information Engineering student at Ben Gurion University. Work
                        experience in IT, software and network implementation. Highly motivated, quick learner, and have
                        strong interpersonal skills. Looking for my first challenge as a student and excited to start my
                        journey as a developer.
                    </p>
                    </div>
            </div>
        )
    }
}
export default AboutMe