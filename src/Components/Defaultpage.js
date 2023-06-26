import React, {useState} from "react";
import "./Defaultpage.css";
import logo from '../images/designlogo.png';
import Avatar from "@mui/material/Avatar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {HiOutlineLogout} from 'react-icons/hi';
import {HiBarsArrowDown} from 'react-icons/hi2';
import {CgProfile} from 'react-icons/cg';
import { AiFillRightCircle } from "react-icons/ai";
import {IoIosNotifications} from 'react-icons/io';
import { blue } from "@mui/material/colors";
import {userLogout} from "../api/userApi";
import { message } from 'antd';

export default function Defaultpage(props) {

  const [isOpen, setIsOpen] = React.useState(false);
  const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const logMeOut = () => {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("QueryTicketingSystem");
      userLogout();
      message.success("Logged Out");
      navigate("/");
    };

  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light headersection">

  <div class="container-fluid">
    
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <HiBarsArrowDown/>
    </button>

   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img src={logo} className="defaultlogoimage"></img>
        Queries System       
      </a>
     
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to='/dashboard' className="linktopages">
          <a class="nav-link" href="#">Home</a></Link>
        </li>
        <li class="nav-item">
        {user.role == "mentor"?<><Link to='/mysolutions' className="linktopages">
          <a class="nav-link" href="#">My solutions</a></Link></>:<><Link to='/myqueries' className="linktopages">
          <a class="nav-link" href="#">My Queries</a></Link></>}
        </li>
        <li class="nav-item">
          <Link to='/adminpage' className="linktopages">
          <a class="nav-link" href="#">Admin</a></Link>
        </li>
      </ul>

    </div>
    <div class="d-flex align-items-center">
      <a class="text-reset me-3" href="#">
      </a>
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ><IoIosNotifications className="icondefault"/>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
         <Avatar className="icondefault"/>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <Link to='/userprofile' style={{textDecoration:"none"}}>
            <a class="dropdown-item" href="#">My profile</a></Link>
          </li>
          <li>
            <a class="dropdown-item" href="#"  onClick={logMeOut}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
  
</nav>


<div className="Content">{props.children}</div>
</>
  );
}
