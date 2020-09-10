import React, { useState, useContext, useEffect } from 'react'
import logo from '../img/logo_small.png'
import Hamburger from './Hamburger'
import { NavLink } from 'react-router-dom'
// import { Context } from '../context'

export default function Navbar() {

    const [open, setOpen] = useState(false)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);

        if (windowDimensions.width > 700) {
            setOpen(false)
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function toggleOpen() {
        setOpen(!open)
    }

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <NavLink exact to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>

            <div className={open ? "nav nav-open" : "nav nav-close"}>
                <ul className={open && windowDimensions.width < 700 ? "show-nav hamburger" : "nav-links"}>
                    <li className="one"><NavLink exact to="/" activeClassName="active-link" onClick={() => toggleOpen()}><span>Home</span></NavLink></li>
                    <li className="two"><NavLink to="/projects" activeClassName="active-link" onClick={() => toggleOpen()}><span>Projects</span></NavLink></li>
                    <li className="three"> <NavLink to="/skills" activeClassName="active-link" onClick={() => toggleOpen()}><span>Skills</span></NavLink></li>
                    <li className="four"><NavLink to="/contact" activeClassName="active-link" onClick={() => toggleOpen()}><span>Contact</span></NavLink></li>
                    <hr className="underline" />
                </ul>
            </div>
            <button
                type="button"
                className="nav-btn"
                onClick={() => toggleOpen()}
            >
                <Hamburger className="hamburger" isOpen={open}/>
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