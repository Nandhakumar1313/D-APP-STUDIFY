import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import App from "../App";
import UserDash from "./UserDash";
import OffDash from "./OffDash";
import LandingPage from "./LandingPage";
import AdminDash from "./AdminDash";

function Appwrapper() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<App />}/>
        <Route path="/userdash" element={<UserDash />}/>
        <Route path="/offdash" element={<OffDash />}/>
        <Route path="/landingpage" element={<LandingPage />}/>
        <Route path="/admindash" element={<AdminDash />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Appwrapper;
