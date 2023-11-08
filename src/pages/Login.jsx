import React from "react";
import InputField from "../component/InputField";
import Button from "../component/Button";
import Card from "../component/Card";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("agung@gmail.com");
  const [password, setPassword] = useState("12346");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };
    try {
      if (data.email !== "agung@gmail.com" || data.password !== "123456") {
        setIsError(true);
      } else {
        setIsError(false);
        navigate("/promo");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container-login">
      <Card className="login-card">
        <div className="">
          <div className="between">
            <h1>Login</h1>
          </div>
          <InputField
            title="Email"
            type="general"
            className="between"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            title="Password"
            type="password"
            className="between"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={`status ${!isError && "hidden"}`}>
            <p className="status-error">wrong password or email</p>
          </div>
          <Button title="login" onClick={handleLogin} />
        </div>
      </Card>
    </div>
  );
}
