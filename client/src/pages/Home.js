import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <>
    <div id=""headdiv>      <header>
        <h1>Welcome to Job Board</h1>
      </header></div>


      <div className="container">
        <section className="hero-section">
          <h1><b id="greetmsg">{getCurrentGreeting()}</b>, Find Your Dream Job!</h1>
          <p>
            Discover the perfect opportunity to advance your career or hire top
            talent effortlessly. Job Board connects professionals with
            employers, enabling success at every step.
          </p>
          <div className="buttons">
            <Link to="/login">
              <button id= "jobs">Browse Jobs</button>
            </Link>
            <Link to="/login">
              <button id= "login">Login</button>
            </Link>
            <Link to="/register">
              <button id="register">Register</button>
            </Link>
          </div>
        </section>

        <section className="info-section">
          <h2>Why Choose Job Board?</h2>
          <ul>
            <li>🌟 Thousands of job opportunities tailored to your skills.</li>
            <li>🔍 Advanced filters to refine your job search.</li>
            <li>💼 Seamless application process for job seekers.</li>
            <li>🌐 Connect with top employers worldwide.</li>
            <li>📈 Resources to help you build a stronger career.</li>
          </ul>
        </section>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} Job Board. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;