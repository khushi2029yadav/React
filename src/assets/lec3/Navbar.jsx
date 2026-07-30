import React from 'react'
import { Link } from "react-router-dom";
// import './navbar.css'
const Navbar = () => {
  return (
    <div>
        <Link to="/">
       <li>
        home
       </li>
       </Link>
       <Link to="/about">
        <li>
        about
       </li>
       </Link>
      
        
        </div>
  )
}

export default Navbar