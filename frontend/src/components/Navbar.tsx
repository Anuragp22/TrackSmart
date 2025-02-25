import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";
import logo_icon from "/images/logo_icon.png";

function Navbar() {
    const { isLoggedIn } = useAuth();

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo_icon} alt="logo" />
                <h2>TrackSmart</h2>
            </div>

            <ul className="nav-links">
                <li><Link to="/" className="nav-item">Dashboard</Link></li>
                <li><Link to="/expenses" className="nav-item">Expenses</Link></li>
                <li><Link to="/analytics" className="nav-item">Analytics</Link></li>
                <li><Link to="/settings" className="nav-item">Settings</Link></li>
            </ul>

            <Link to="/login" className="login-btn">{isLoggedIn ? "Profile" : "Login"}</Link>
        </nav>
    );
}

export default Navbar;
