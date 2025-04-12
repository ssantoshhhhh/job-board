import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "job-seeker",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/auth/register", formData)
      .then(() => {
        alert("Registration successful!");
        navigate("/login");
      })
      .catch(() => {
        setError("Failed to register. Please try again.");
      });
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="job-seeker">Job Seeker</option>
          <option value="employer">Employer</option>
        </select>
        <button type="submit">Register</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Register;
