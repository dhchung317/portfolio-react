import React, { Component } from 'react'
import logo from '../img/logo_small.png'
import { Link } from 'react-router-dom'

export default function Navbar() {

        return (
            <nav className="navbar">

                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>

                <div className="nav">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                </div>

            </nav>
        )
    
}
