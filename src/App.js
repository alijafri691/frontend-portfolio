import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skill";
import Hobbies from "./Components/Hobbies";
import AcademicBg from "./Components/AcademicBg";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/academic" element={<AcademicBg />} />
      </Routes>
    </Router>
  );
};

export default App;
