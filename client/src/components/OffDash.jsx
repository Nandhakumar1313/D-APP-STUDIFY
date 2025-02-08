import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import Faq from "./Faq";
import LandingPage from "./LandingPage";
import View from "./View";

const OffDash = () => {
  const [content, setContent] = useState("Welcome to the Home Page!");
  const navigate = useNavigate();

  useEffect(() => {
    const existingScript = document.getElementById("chatbase-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "chatbase-script"; // Prevents multiple insertions
      script.async = true;
      document.body.appendChild(script);
    }

    const onLoad = () => {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args) => {
          if (!window.chatbase.q) {
            window.chatbase.q = [];
          }
          window.chatbase.q.push(args);
        };
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") return target.q;
            return (...args) => target(prop, ...args);
          },
        });
      }
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      const addedScript = document.getElementById("chatbase-script");
      if (addedScript) {
        document.body.removeChild(addedScript);
      }
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
          <button onClick={() => setContent(<View />)}>Get-Data</button>
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

export default OffDash;
