import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo_small.png';
import Hamburger from './Hamburger';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 700);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 700;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-logo">
        <NavLink to="/" end aria-label="Home" onClick={() => setOpen(false)}>
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className={open ? 'nav nav-open' : 'nav nav-close'}>
        <ul
          id="navigation-links"
          className={open && isMobile ? 'show-nav hamburger' : 'nav-links'}
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive ? 'active-link' : undefined
                }
                onClick={() => setOpen(false)}
              >
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="nav-btn"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        aria-controls="navigation-links"
        onClick={() => setOpen((previous) => !previous)}
      >
        <Hamburger isOpen={open} />
      </button>
    </nav>
  );
}
