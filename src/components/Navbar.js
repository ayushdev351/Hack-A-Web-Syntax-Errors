import React from "react";
import {Link, NavLink} from 'react-router-dom';

import './Navbar.css';
import '../App.css';

function Navbar() {
    return(
        <div className="Navbar">
          <div className="NavbarLeft">
            <Link to="/" className="Logo">
             DoCall
           </Link>
          </div>

           <div className="NavbarRight">
           <NavLink
          className="Home Links"
          exact="true"
          style={isActive => ({
            color: isActive ? "#000060" : "000060"
          
          })}
         
          to="/"
          
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          className="Consult Links"
          style={isActive => ({
            color: isActive ? "#000060" : "000060"
          
          })}
          to="/consult"
          
        >
          <p>Consult</p>
        </NavLink>
        <NavLink
          className="Predict Links"
          style={isActive => ({
            color: isActive ? "#000060" : "000060"
          
          })}
          to="/predict"
          
        >
          <p>Predict</p>
        </NavLink>
        <NavLink 
        to="/login" 
        className= "Login Links"
        style={isActive => ({
          color: isActive ? "#000060" : "000060"
        
        })}
        >Login
        </NavLink>
        <NavLink 
        to="/signUp" 
        className= "SignUp Links"
        style={isActive => ({
          color: isActive ? "black" : "white"
        
        })}
        >SignUp
        </NavLink>
           </div>
        </div>

    );
}

export default Navbar;