import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Promo from "./pages/Promo";
import "./css/global.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/promo" element={<Promo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
