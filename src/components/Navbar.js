import React from "react";
import {Link, NavLink} from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return(
        <div>
           <Link to="/">
           <i className="fa-solid fa-user-doctor-message">DoCall</i>
           </Link>

           <div className="nav-center">
           <NavLink
          to="/"
          style={(isActive) => ({
            filter: isActive ? "brightness(2)" : ""
          })}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/consult"
          style={(isActive) => ({
            filter: isActive ? "brightness(2)" : ""
          })}
        >
          <p>Consult</p>
        </NavLink>
        <NavLink
          to="/predict"
          style={(isActive) => ({
            filter: isActive ? "brightness(2)" : ""
          })}
        >
          <p>Predict</p>
        </NavLink>
           </div>
        </div>

    )
}

export default Navbar;