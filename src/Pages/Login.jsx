import "./CssFile/Login.css";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const { email, password } = formData;
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }
    if (email === "sadik123@gmail.com" && password === "123456") {
      setError("");
      alert("Login successful!");
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="input-container">
        <h6 className="title"> Login</h6>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="sadik123@.com"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            autoComplete="123456"
            required
          />
          <p className="page-link">
            <span className="page-link-label">Forgot Password?</span>
          </p>
          {error && <p className="error-display">{error}</p>}
          <button className="form-btn">Log in</button>
        </form>
        <p className="sign-up-label">
          Don't have an account?
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </p>
        <div className="buttons-container">
          <div className="apple-login-button">
            <FaApple size={25} />
            <span>Log in with Apple</span>
          </div>
          <div className="google-login-button">
            <FcGoogle size={25} />
            <span>Log in with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
