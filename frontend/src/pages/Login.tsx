import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";
import logo from "/images/logo.webp";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:3001/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: "include", // Ensures cookies are included for authentication
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Login failed");

            await login(data.token);
            navigate("/dashboard");
        } catch (error) {
            const errMessage = (error as Error).message || "An error occurred during login.";
            console.error("Login error:", errMessage);
            setError(errMessage);
        }
    };


    return (
        <div className="login-container" >
            <div className="login-box-icon">
                <img src={logo} alt="company_icon" />
            </div>
            <div className="login-box">
                {isLoggedIn ? (
                    <div className="logged-in">
                        <h2>Profile</h2>
                        <p>You are already Logged In. Please Logout if you want to continue with another account.</p>
                        <button onClick={() => logout()} className="login-btn">Logout</button>
                    </div>
                ) : (
                    <div className="login-form">
                        <h2>Login</h2>
                        {error && <p className="error-message">{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="login-btn">Login</button>
                        </form>
                        <p className="register-link">
                            Don't have an account? <a href="/register">Sign up</a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Login;
