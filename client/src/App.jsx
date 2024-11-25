import React from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className={`pt-24`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
