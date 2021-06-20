import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
            <nav className="navbar">
                
                    <div className="logo">
                    <img src="https://www.missioned.in/static/media/NavigationLogo.19c19c2f.svg" alt="" class="img-fluid" />
                    </div>
                    <h1 className="logohead">MissionEd</h1>
                    <ul className="navlist">
                        <li><NavLink to="/">MissionED Store</NavLink></li>
                        <li><NavLink to="/classes">MissionED Classes</NavLink></li>
                        <li><NavLink to="/referral">MissionED Referral</NavLink></li>
                        <li><NavLink to="/pro">MissionED Pro</NavLink></li>
                </ul>
                   <button className="btn">Login</button>
                </nav>
        
                )
}

                export default Navbar