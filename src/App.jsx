import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ClientSuccess from "./pages/ClientSuccess";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import PowerPod from "./pages/Solution/PowerPod";
import SubmitForm from "./pages/SubmitForm";
import Credits from "./pages/Solution/Credits";
import GhostHost from "./pages/Solution/GhostHost";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/client-success" element={<ClientSuccess />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/powerpod" element={<PowerPod />} />
        <Route path="/submit-form" element={<SubmitForm />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/ghosthost" element={<GhostHost />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
