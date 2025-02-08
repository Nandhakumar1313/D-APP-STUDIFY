import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import Faq from "./Faq";
import LandingPage from "./LandingPage";
import UploadPage from "./Upload";
import View from "./View";
import Share from "./Share";


const AdminDash = () => {
  const [content, setContent] = useState("Welcome to the Home Page!");
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "sZxFW0EyNbyVEcfdip3oH";
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on component unmount
    };
  }, []);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Fixed Navbar with Logout button on the right */}
      <div className="navbar">
        <div className="welcome-box">Welcome To Our D-app</div>
        <div className="nav-links">
          <button onClick={() => setContent(<LandingPage />)}>Home</button>
          <button onClick={() => setContent(<Faq />)}>FAQ</button>
          <button onClick={() => setContent(<UploadPage />)}>Upload</button>
          <button onClick={() => setContent(<View />)}>Get-Data</button>
          <button onClick={() => setContent(<Share />)}>Share</button>
          <button onClick={() => setContent(
            <>
              📧 Email: support@yourblockchainstorage.com <br />
              📞 Phone: +91 93978 50061 <br />
            </>
          )}>
            Contact Us
          </button>
        </div>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      {/* Centered Content Box */}
      <div className="content-box">{content}</div>
    </div>
  );
};

export default AdminDash;
