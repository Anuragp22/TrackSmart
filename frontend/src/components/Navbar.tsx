import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css"
import logo_icon from "/images/logo_icon.png"

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">

            <div className="logo">
                <img src={logo_icon} alt="logo" />
                <h2>TrackSmart</h2>
            </div>

            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
                <li><Link to="/expenses" className="nav-item" onClick={() => setIsOpen(false)}>Expenses</Link></li>
                <li><Link to="/analytics" className="nav-item" onClick={() => setIsOpen(false)}>Analytics</Link></li>
                <li><Link to="/settings" className="nav-item" onClick={() => setIsOpen(false)}>Settings</Link></li>
            </ul>

            <Link to="/login" className="login-btn">Login</Link>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

        </nav>
    );
}

export default Navbar;
