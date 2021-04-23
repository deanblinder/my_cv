import React, {Component} from "react";
import "./Footer.css"
import Avatar from 'react-avatar';
import {Col, Row} from "react-bootstrap";
import { createAvatarComponent, TwitterSource } from 'react-avatar';
import ReactRoundedImage from "react-rounded-image";

class Footer extends Component{
    render() {

        return(
            <div className='footer'>
                <div className='pair'>
                    <ReactRoundedImage
                        image="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/245532/28-512.png"
                        roundedColor="white"
                        imageWidth="70"
                        imageHeight="70"
                        hoverColor="grey"
                        roundedSize="15"
                    />
                    <a style={{color:'white',textAlign:'left',float:'left'}} href="mailto:deanblinder91@gmail.com"><p>deanblinder91@gmail.com</p></a>
                </div>

                <div className='pair'>
                    <ReactRoundedImage
                        image="https://cdn0.iconfinder.com/data/icons/mobile-device/512/mobile-phone-blue-round-2-512.png"
                        roundedColor="white"
                        imageWidth="70"
                        imageHeight="70"
                        hoverColor="grey"
                        roundedSize="15"
                    />

                    <a style={{color:'white',textAlign:'left'}} href="tel:+972523980151">+972523980151</a>
                </div>
                <div className='pair'>
                    <ReactRoundedImage
                        image="https://i.pinimg.com/564x/a1/9c/a4/a19ca4f554614d7224f44db7798db87b.jpg"
                        roundedColor="white"
                        imageWidth="70"
                        imageHeight="70"
                        hoverColor="grey"
                        roundedSize="15"
                    />

                    <a style={{color:'white'}} href="https://www.linkedin.com/in/dean-blinder-1276a31a9/">
                        linkedin
                    </a>
                </div>
                <div className='pair'>
                    <ReactRoundedImage
                        image="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-512.png"
                        roundedColor="white"
                        imageWidth="70"
                        imageHeight="70"
                        hoverColor="grey"
                        roundedSize="15"
                    />
                    <a style={{color:'white'}} href="https://github.com/deanblinder">
                        Git
                    </a>
                </div>
            </div>
        )
    }
}
export default Footer