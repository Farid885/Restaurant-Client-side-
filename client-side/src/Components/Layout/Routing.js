import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/about/About";
import Contact from "../Pages/Contact";
import Team from "../Pages/Team";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";

function Routing() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/team" element={<Team />} />
      <Route exact path="/menu " element={<Menu />} />
      
    </Routes>
  );
}

export default Routing;
