import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Promo from "./pages/Promo";
import "./css/global.css";
import Adress from "./pages/Adress";
import Fleet from "./pages/Fleet";
import Order from "./pages/Order";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/adress" element={<Adress />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
