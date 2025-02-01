import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-portfolio-indol.vercel.app/api/skill")
      .then((res) => setSkills(res.data.data.Skill))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
