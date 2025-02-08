import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css"; // Import external CSS

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); // Reset error message
        
        axios.post('http://localhost:3001/login', { name, password })
            .then(result => {
                console.log("Login Response:", result.data);
                if (result.data.message.toLowerCase() === "success") {
                    const userRole = result.data.role;
    
                    if (userRole === "user") {
                        navigate('/userdash');
                    } else if (userRole === "official") {
                        navigate('/offdash');
                    } else if (userRole === "admin") {
                        navigate('/admindash'); // Redirect admin to admin dashboard
                    } else {
                        setError("Invalid role detected.");
                    }
                } else {
                    setError(result.data.message); // Show error message from backend
                }
            })
            .catch(err => {
                console.error("Login Error:", err);
                setError("Login failed. Please try again.");
            });
    };
    

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>

                {error && <p className="error-message">{error}</p>} {/* Display error if exists */}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>

                <p>Don't have an account?</p>
                <Link to="/register" className="btn secondary">Register</Link>
                
            </div>
        </div>
    );
}

export default Login;
