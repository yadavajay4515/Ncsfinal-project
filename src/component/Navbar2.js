import React, { Component } from 'react'
import logo from "../images/logo.png"
import { AiFillCaretRight } from "react-icons/ai";

import { FaHome,FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link} from "react-router-dom";

export default class Navbar2 extends Component {

image={ width: '168px',
  height: '55px',
  margin: '3px 91px'
}
  // name = localStorage.getItem('name');
  logout() {
    window.location.href = "/";
  }
  render() {
    return (
      <>
        <nav style={{height:"57px"}} className="navbar navbar-expand-lg fixed-top bg-light">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="/">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item "> <img src={logo} alt="...." style={this.image} /></li>
                
                <li className="nav-item" style={{ marginTop: "24px" }}>
                  <Link className="nav-link active" aria-current="page" to='/' ><FaHome /></Link>
                </li>
                <li className="nav-item dropdown" style={{ marginTop: "24px" }}>
                  <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Student
                  </a>
                  <ul className="dropdown-menu">

                    <li><Link className="dropdown-item" to="/addstudent"><AiFillCaretRight />AddStudent</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/studentlist"><AiFillCaretRight />StudentList</Link></li>

                  </ul>
                </li>

                <li className="nav-item dropdown" style={{ marginTop: "24px" }}>
                  <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Marksheet
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/addmarksheet"><AiFillCaretRight />AddMarkSheet</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/marksheetlist"><AiFillCaretRight />MarkSheet list</Link></li>

                  </ul>
                </li>

                <li className="nav-item dropdown" style={{ marginTop: "24px" }}>
                  <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    College
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link style={{ display: 'contents' }} className="dropdown-item " to="/collegedetails"><AiFillCaretRight />AddCollege</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link style={{ display: 'contents' }} className="dropdown-item" to="/collegelist"><AiFillCaretRight />College list</Link></li>


                  </ul>
                </li>
                <li className="nav-item dropdown" style={{ marginTop: "24px" }}>
                  <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Role
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item " to="/addrole"><AiFillCaretRight />Add Role</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/rolelist"><AiFillCaretRight />Role list</Link></li>

                  </ul>
                </li>
                <li className="nav-item dropdown" style={{ marginTop: "24px" }}>
                  <a className="nav-link  active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/adduser"><AiFillCaretRight />Add User</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/userlist"><AiFillCaretRight />User List</Link></li>

                  </ul>
                </li>
                <li className="nav-item dropdown" style={{ marginTop: "24px" ,marginLeft:"340px",fontWeight: 'bolder' }}>
                  <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUserAlt/> {this.props.user}</a>
                  <ul className="dropdown-menu">
                  <li style={{fontWeight:'bolder',margin:'0px 21px', fontSize: '15px'}}>
                  <Link className="nav-link active" onClick={this.logout}><FiLogOut/> Logout</Link>
                </li>
                    

                  </ul>
                </li>

                {/* <li style={{ textDecorationLine: 'underline', marginTop: '33px', width: '350px', fontWeight: 'bolder' }}><FaUserAlt/>{this.props.user}</li>
                <li>
                  <Link style={{ marginTop: "24px", marginLeft: '82px', fontWeight: 'bolder' }} className="nav-link " onClick={this.logout}><AiOutlineLogout />Logout</Link>
                </li> */}

              </ul>

            </div>
          </div>
        </nav>
      </>
    )
  }
}
