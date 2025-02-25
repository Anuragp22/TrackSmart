import "../styles/Login.css";
import logo from "/images/logo.webp"

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box-icon">
                <img src={logo} alt="company_icon" />
            </div>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <p className="register-link">
                    Don't have an account? <a href="/register">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
