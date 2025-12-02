import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./pages/Home";
import SedekahSampah from "./pages/SedekahSampah";
import Edukasi from "./pages/Edukasi";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sedekahsampah" element={<SedekahSampah />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
