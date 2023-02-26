import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {IoHomeSharp} from "react-icons/io5";
import {BiLogIn} from "react-icons/bi";
import {FaUserPlus} from "react-icons/fa";
import logo1 from "../images/exam-results.png"


export default class Navbar1 extends Component {
    render() {
        return (
            <>
            {/* style={{background:' linear-gradient(181deg, #71769f, transparent)'}} */}
            {/* className="navbar navbar-expand-lg  fixed-top bg-light" */}
            <div className='nav1'>
                <nav  className={`navbar navbar-expand-lg fixed-top navbar-light bg-light`}>
                    <div className="container-fluid" id='navv1'>
                    <Link className="navbar-brand" to="#" > <img style={{marginLeft: '1rem' , width: '2rem', height: '2rem'}} src={logo1} alt="" /> </Link>
                       <div style={{fontSize: '30px' ,fontWeight:'bold',color:'#fd2222'}}>ORS</div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                               
                          
                                <li className="nav-item">
                                    <Link  className="nav-link active" to='/'><IoHomeSharp/>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className="nav-link active" to='#'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className="nav-link active" to='#'>Contact</Link>
                                </li>
                      
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/login'><BiLogIn size={20}/> Login</Link>
                                </li>
                     
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/addstudent'><FaUserPlus size={19}/> User Registration</Link>
                                </li>

                            </ul>
                         
                        </div>
                    </div>
                </nav>
                </div>
            </>
        )
    }
}
