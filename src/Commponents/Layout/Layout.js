import React, {Component} from 'react';
// import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import AboutMe from "../AboutMe/AboutMe";
import StickyFooter from 'react-sticky-footer';
import Header from "../Header/Header";
import './Layout.css'
class Layout extends Component {
    render() {
        return (
                <>
                    {/*<div style={{display:'flex',flexDirection:'row'}}>*/}
                    {/*    <div>*/}
                    {/*        hello world*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                            <Header/>
                            <div className='content'>
                                {this.props.children}
                            </div>
                        {/*</div>*/}
                    {/*</div>*/}
                    <Footer/>
                </>
        )
    }
}
export default Layout;