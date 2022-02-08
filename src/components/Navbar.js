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
          className="Home Links "
          exact={true}
          to="/"
          
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          style={{ textDecoration: 'none' }}
          className="Consult Links"
          to="/consult"
          
        >
          <p>Consult</p>
        </NavLink>
        <NavLink
          className="Predict Links"
          to="/predict"
          
        >
          <p>Predict</p>
        </NavLink>
        <NavLink to="/login" className= "Login Links">Login
        </NavLink>
        <NavLink to="/signUp" className= "SignUp Links">SignUp
        </NavLink>
           </div>
        </div>

    );
}

export default Navbar;