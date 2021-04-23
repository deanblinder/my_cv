import React, {Component} from "react";
import {Accordion, Card, Button, Col, Row} from 'react-bootstrap';
import './Experience.css'
import {Container} from "@material-ui/core";
class Toolbar extends Component{
    render() {
        return(
            <div className='experience'>
                <Row>
                    <Col sm={3}>
                    </Col>
                    <Col sm={6} style={{textAlign:'left',marginTop:'5%'}}>
                        <h1 style={{margin:'0'}}>IT, Recruiting Station</h1>
                        <h2 style={{margin:'0'}}>IDF</h2>
                        <h3>2010-2013</h3>
                        <ul style={{fontSize:'18px'}}>
                            <li style={{marginTop:'20px'}}>Inspected and upgraded users' computer networking
                                systems; updated software and replaced outdated hardware,
                                including desktop PCs, laptops, routers, and ethernet
                                cables.
                            </li>
                            <li style={{marginTop:'20px'}}>Graduating SAP implementation course and implementing it
                                in the base.
                            </li>
                            <li style={{marginTop:'20px'}}>
                                Instructed new software features for system users.
                            </li>
                        </ul>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default Toolbar;