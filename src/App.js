import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import Menu from "./Components/Menu.js";
import About from "./Components/About.js";
import Navbar from "./Components/Navbar.js";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
