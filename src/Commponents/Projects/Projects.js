import React, {Component} from "react";
import {Accordion, Card, Button, Col, Row, Carousel} from 'react-bootstrap';
import './Projects.css'
import Photo from '../../Assets/prof.jpg'
import {Container} from "@material-ui/core";
class Projects extends Component{
    render() {
        return(
            <div className='projects'>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <h1 style={{color:'black'}}>Application, responsive to mobile and PC (react.js)</h1>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <h3>
                                            An application targeted at assisting users during the pandemic.
                                            People with underlying health conditions, mobility challenges, or any other risk group can upload a grocery list
                                            request. Anyone who wishes to assist can view the requests on the map with details and
                                            contact the requester directly through WhatsApp and Facebook using react and firebase.
                                        </h3>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        <h1 style={{color:'black'}}>Recipes website(vue.js)</h1>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <h3>
                                            Implemented a full-stack end-to-end project. Client-side using vue.js and server-side
                                            using node.js and Azure database
                                        </h3>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        <h1 style={{color:'black'}}>flower shop website(react.js)</h1>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                       <h1 style={{color:'black'}}>Search Engine(python)</h1>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                        <h1 style={{color:'black'}}>Packman Game(html)</h1>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
            </div>
        )
    }
}
export default Projects;