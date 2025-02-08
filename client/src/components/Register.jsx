import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Register.css"; // Import external CSS

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // Default role is "user"
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    console.log("Form Data:", formData); // Debugging log
  
    try {
      const response = await axios.post("http://localhost:3001/register", formData);
      console.log("Response:", response.data);
      navigate("/login");
    } catch (err) {
      console.error("Error:", err);
      setError("Registration failed. Please try again.");
    }
  };
  
  return (
    <div className="register-container">
      {/* Background effect */}
      <div className="bg"></div>

      {/* Register Box */}
      <div className="register-box">
        <h2>Register</h2>

        {error && <p className="error-message">{error}</p>} {/* Display error if exists */}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="role">Role </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="user">User</option>
              <option value="official">Official</option>
            </select>
          </div>

          <button type="submit" className="btn">Register</button>
        </form>

        <p>Already have an account?</p>
        <Link to="/login" className="btn secondary">Login</Link>
      </div>
    </div>
  );
}

export default Register;
