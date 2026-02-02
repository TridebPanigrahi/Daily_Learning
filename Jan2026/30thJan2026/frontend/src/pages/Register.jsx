import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import manWithLaptop from "../assets/auth/manWithLaptop.png";
import logo from "../assets/auth/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../validation/registerSchema";
import api from "../api/axios";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async (data) => {
    try {
      await api.post("/user", {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "User",
      });
      toast.success("Registration successful 🎉");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed ❌");
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
        <h1>Create a New Account</h1>
        <p className="subtitle">Join Larana Inc Today</p>

        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Full Name" {...register("name")} />
          {errors.name && <p className="error">{errors.name.message}</p>}
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
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}

          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="switch">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
}
