import React, { Component } from 'react'
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
                    <span className="underline"/>
                    <li>
                        <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" activeClassName="active-link">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" activeClassName="active-link">Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                    </li>
                </ul>
                </div>

            </nav>
        )
    
}