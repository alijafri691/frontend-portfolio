import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Hobbies.css";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/hobbies")
      .then((res) => setHobbies(res.data.data.Hobbies))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="hobbies-container">
      <h1>Hobbies</h1>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
