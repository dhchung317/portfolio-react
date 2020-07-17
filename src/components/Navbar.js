import React from 'react'
import logo from '../img/logo_small.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
        return (
            <nav className="navbar">
                <div className="nav-logo">

                        <img src={logo} alt="logo"/>

                </div>
                <div className="nav">
                                
                <ul className="nav-links">
                    <li className="one"><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
                    <li className="two"><NavLink to="/projects" activeClassName="active-link">Projects</NavLink></li>
                    <li className="three"> <NavLink to="/skills" activeClassName="active-link">Skills</NavLink></li>
                    <li className="four"><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
                    <hr className="underline"/>
                </ul>
                </div>

            </nav>
        )
    
}