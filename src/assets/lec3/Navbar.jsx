import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
// import './navbar.css'
const Navbar = () => {
  return (
    <div id='nav'>
      <Link to={'/'}>    
      
      <li>home</li>
      </Link>
      <Link to={'/about'}>
      <li>about</li>
      <Link to={'/p'}>
        <li>list</li>
      </Link>
    
     

 </Link>
      
        
        </div>
  )
}

export default Navbar