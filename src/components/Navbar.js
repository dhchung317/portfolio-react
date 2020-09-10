import React, { useState } from 'react'
import logo from '../img/logo_small.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const [open, setOpen] = useState(false)

    function toggleOpen(){
        setOpen(!open)
        console.log(open)
    }

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <NavLink exact to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className="nav">
                <ul className="nav-links">
                    <li className="one"><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
                    <li className="two"><NavLink to="/projects" activeClassName="active-link">Projects</NavLink></li>
                    <li className="three"> <NavLink to="/skills" activeClassName="active-link">Skills</NavLink></li>
                    <li className="four"><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
                    <hr className="underline" />
                </ul>
            </div>
            <button
                type="button"
                className="nav-btn"
                onClick={() => toggleOpen()}
            >
                <img src={logo} />
            </button>

        </nav>
    )

}

/**TODO: toggle hamburger menu when screen is small
 *  add menu icon and align right
 *  add media query, show icon when under certain height
 *  add css to the media query to change menu items to stack vertically, and under the navbar height, with a width of screen
 *  add toggle logic for hamburger menu, which will toggle when the hamburger menu shows and is clicked.
 **/