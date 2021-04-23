import React, {Component} from "react";
import './Education.css'
import ReactRoundedImage from "react-rounded-image";
import {Col, Row} from "react-bootstrap";
class AboutMe extends Component{
    render() {
        return (
            <div className='education'>
                <Row>
                    <Col sm={3}>
                        <div style={{marginTop:'7%',marginLeft:'7%'}}>

                        </div>
                    </Col>
                    <Col sm={6} style={{textAlign:'left',marginTop:'5%'}}>
                        <ul >
                            <li>
                                <h2 style={{margin:'0'}}>Bachelor of Science: Software And Information Systems
                                    Engineering
                                </h2>
                                <h3 style={{margin:'0' }}>
                                    Ben Gurion University
                                </h3>
                                <h4 style={{marginBottom:'0'}}>
                                    Expected graduation: 2022
                                </h4>
                                <h5 style={{margin:'0'}}>
                                    2018 - present
                                </h5>
                            </li>
                            <li>
                                <h2 style={{margin:'0'}}>High School Diploma</h2>
                                <h3 style={{margin:'0'}}>
                                    The Hebrew Reali School in Haifa
                                </h3>
                                <h4 style={{marginTop:'10px',marginBottom:'0'}}>
                                    Extended courses: Computer Science
                                </h4>
                                <h5 style={{margin:'0'}}>
                                    1998 - 2010
                                </h5>
                            </li>
                        </ul>


                    </Col>
                </Row>


            </div>
        )
    }
}
export default AboutMe