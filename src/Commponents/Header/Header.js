import React, {Component} from "react";
import "./Header.css"
import {Button, Container, FormControl} from "@material-ui/core";
import {Col, Row, Nav, Navbar, Form} from "react-bootstrap";
import {green} from "@material-ui/core/colors";
import './Header.css'
class Header extends Component{
    render() {
        return(
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
            <Navbar className='header'>
                <Navbar.Brand style={{marginLeft:'70px'}} href="/AboutMe">
                    <h1 style={{marginBottom:'0'}}>Dean blinder </h1>
                    <h3 style={{marginTop:'10px'}} >software information engineer student</h3>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link style={{marginLeft:'100px'}} href="/Experience" >Experience</Nav.Link>
                    <Nav.Link style={{marginLeft:'100px'}} href="/Education" >Education</Nav.Link>
                    <Nav.Link style={{marginLeft:'100px'}} href="/Projects" >Projects</Nav.Link>
                    <Nav.Link style={{marginLeft:'100px'}} href="/Certifi" >Certifi</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
export default Header;