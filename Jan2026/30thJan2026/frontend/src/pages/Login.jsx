import { Link } from "react-router-dom";
import "../styles/auth.css";
import manWithLaptop from "../assets/auth/manWithLaptop.png";
import logo from "../assets/auth/logo.png";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="auth-left-Img">
          <img
            src={manWithLaptop}
            alt="illustration"
            className="illustration"
          />
        </div>
      </div>

      <div className="auth-right glass">
        <h1>Welcome Back</h1>
        <p className="subtitle">Login to your account</p>

        <form className="auth-form">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />

          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        <p className="switch">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
