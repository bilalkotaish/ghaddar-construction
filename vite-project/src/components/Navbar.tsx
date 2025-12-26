import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHardHat } from 'react-icons/fa';
import './Navbar.css';
import logoImage from '../assets/generallogo.png'; // Adjust path if needed (e.g., './assets/generallogo.png')
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-logo">
                        <img src={logoImage} alt="Ghaddar General Trading & Contracting Logo" />
                        <span className="logo-text">
                            <span className="logo-main">Ghaddar</span>
                            <span className="logo-sub">General Trading & Contracting</span>
                        </span>
                    </Link>

                    <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        className="navbar-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
