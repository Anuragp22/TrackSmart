import "../styles/Register.css";
import logo from "/images/logo.webp"


const Register = () => {
    return (
        <div className="register-container">
            <div className="register-box-icon">
                <img src={logo} alt="company_icon" />
            </div>
            <div className="register-box">
                <h2>Register</h2>
                <form>
                    <div className="input-group">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <div className="input-group">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="register-btn">Register</button>
                </form>
                <p className="register-link">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
