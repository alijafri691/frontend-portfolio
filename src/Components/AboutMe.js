import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AboutMe.css";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/aboutme")
      .then((res) => setAboutMe(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="aboutme-container">
      <h1>About Me</h1>
      <p>{aboutMe}</p>
    </div>
  );
};

export default AboutMe;
