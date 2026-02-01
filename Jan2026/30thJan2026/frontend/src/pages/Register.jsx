import { Link } from "react-router-dom";
import "../styles/auth.css";
import manWithLaptop from "../assets/auth/manWithLaptop.png";
import logo from "../assets/auth/logo.png";

export default function Register() {
  const handelSubmit = () => {
    console.log("Save");
  };
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
        <h1>Create a New Account</h1>
        <p className="subtitle">Join Larana Inc Today</p>

        <form className="auth-form" onSubmit={handelSubmit}>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button type="submit" className="btn-primary">
            Sign Up
          </button>
        </form>

        <p className="switch">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
}
