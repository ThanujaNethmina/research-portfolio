import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Ear } from 'lucide-react';
import '../../styles/navbar.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/domain', label: 'Domain' },
  { path: '/milestones', label: 'Milestones' },
  { path: '/documents', label: 'Documents' },
  { path: '/presentations', label: 'Slides' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" onClick={closeMobile}>
            <div className="logo-icon"><Ear size={20} /></div>
            <div className="logo-text">HEAR<span>ME</span></div>
          </Link>

          <div className="navbar-links">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? 'active' : ''}
            end={item.path === '/'}
            onClick={closeMobile}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
