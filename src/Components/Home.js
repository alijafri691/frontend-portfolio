import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <Link to="/aboutme" className="nav-link">
          About Me
        </Link>
        <Link to="/skill" className="nav-link">
          Skills
        </Link>
        <Link to="/hobbies" className="nav-link">
          Hobbies
        </Link>
        <Link to="/academic" className="nav-link">
          Academic Background
        </Link>
      </nav>
    </div>
  );
};

export default Home;
