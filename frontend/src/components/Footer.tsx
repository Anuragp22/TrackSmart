import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo_icon from "/images/logo_icon.png";
import { FaFacebookF, FaTwitter, FaMediumM, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <img src={logo_icon} alt="logo" />
                <div className="footer-info">
                    <h2>TrackSmart</h2>
                    <h3>Indian Institute of Technology, Kharagpur</h3>
                </div>
            </div>

            <div className="footer-right">
                <ul className='footer-links'>
                    <Link to="https://www.facebook.com" className="footer-item"><FaFacebookF size={20} /></Link>
                    <Link to="https://www.instagram.com" className="footer-item"><FaInstagram size={20} /></Link>
                    <Link to="https://www.x.com" className="footer-item"><FaTwitter size={20} /></Link>
                    <Link to="https://www.medium.com" className="footer-item"><FaMediumM size={20} /></Link>
                </ul>

                <div className="footer-terms">
                    <Link to='/'>Terms and Conditions</Link>
                    <Link to='/'>Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
