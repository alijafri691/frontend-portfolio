import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AcademicBg.css";

const AcademicBg = () => {
  const [academicBg, setAcademicBg] = useState({});

  useEffect(() => {
    axios
      .get("https://backend-portfolio-indol.vercel.app/api/academic")
      .then((res) => setAcademicBg(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="academicbg-container">
      <h1>Academic Background</h1>
      <p>University: {academicBg.University}</p>
      <p>Passing Year: {academicBg.Passing_Year}</p>
    </div>
  );
};

export default AcademicBg;
