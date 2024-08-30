import React, { useEffect, useRef } from 'react'
import './navbar.css'
import logo from '../../assets/netbanner.png'
import search from '../../assets/search.jpg'
import bellicon from '../../assets/bell-icon-vector.jpg'
import profileimg from '../../assets/profile.jpg'
import downicon from '../../assets/down.jpg'
import { logout } from '../../firebase'

const Navbar = () => {

const navRef = useRef();

useEffect(() => {
  window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark')
    }else{
      navRef.current.classList.remove('nav-dark')
    }
  })
})

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt=""/>
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & polular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className="icons" />
          <p>Children</p>
        <img src={bellicon} alt="" className="bellicon" width="50px" height="50px"/>
        <div className="navbarprofile">
          <img src={profileimg} alt="" className="profile" width="50px" height="50px"/>
          <img src={downicon} alt=""  width="50px" height="50px"/>
    
          <div className="dropdown">
             <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
             </div>  
          </div>
        
    </div>
    </div>
    
  )
}

export default Navbar