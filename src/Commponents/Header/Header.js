import React, {Component} from "react";
import "./Header.css"
import {Button, Container, FormControl} from "@material-ui/core";
import {Col, Row, Nav, Navbar, Form} from "react-bootstrap";
import {green} from "@material-ui/core/colors";
import './Header.css'
class Header extends Component{
    render() {
        return(
            <Navbar className='header' bg="light" variant="light">
                <Navbar.Brand style={{marginLeft:'5%'}} href="/AboutMe">
                    <h1>Dean blinder </h1>
                    <h3 style={{marginTop:'0'}}>software information engineer student</h3>
                </Navbar.Brand>
                <Nav style={{marginLeft:'10%'}} className="mr-auto">
                    <Nav.Link href="/Experience" >Experience</Nav.Link>
                    <Nav.Link href="/Education" >Education</Nav.Link>
                    <Nav.Link href="/Projects" >Projects</Nav.Link>
                    <Nav.Link href="/Certifi" >Certifi</Nav.Link>
                </Nav>
            </Navbar>
            // <div className='header'>
            //         <Nav>
            //             <Nav.Link style={{color:'black'}} href="/AboutMe" >
            //                 <h1>Dean blinder </h1>
            //                 <h3 style={{marginTop:'0'}}>software information engineer student</h3>
            //             </Nav.Link>
            //         </Nav>
            //
            //         <Nav>
            //             <Nav.Link style={{color:'black'}} href="/Experience" >Experience</Nav.Link>
            //         </Nav>
            //         <Nav>
            //             <Nav.Link style={{color:'black'}} href="/Education" >Education</Nav.Link>
            //         </Nav>
            //         <Nav>
            //             <Nav.Link style={{color:'black'}} href="/Projects" >Projects</Nav.Link>
            //         </Nav>
            //
            //         <Nav>
            //             <Nav.Link style={{color:'black'}} href="/Certifi" >Certifi</Nav.Link>
            //         </Nav>
            // </div>
        )
    }
}
export default Header;