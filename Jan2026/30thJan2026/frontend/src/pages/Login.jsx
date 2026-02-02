import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import manWithLaptop from "../assets/auth/manWithLaptop.png";
import logo from "../assets/auth/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../api/axios";
import { LoginSchema } from "../validation/loginSchema";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/login", data);

      login(res.data.token);

      const role = res.data.user.role;

      toast.success("Login successful 🎉");

      // 3️⃣ Navigate based on role
      if (role === "Admin") {
        navigate("/dashboard");
      } else {
        navigate("/user");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid email or password");
    }
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
        <h1>Welcome Back</h1>
        <p className="subtitle">Login to your account</p>

        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Navigating..." : "Login"}
          </button>
        </form>

        <p className="switch">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
