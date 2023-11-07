import React from "react";
import InputField from "../component/InputField";
import Button from "../component/Button";
import Card from "../component/Card";
import "../css/login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/promo");
  };
  return (
    <div className="container-login">
      <Card className="login-card">
        <div className="">
          <div className="between">
            <h1>Login</h1>
          </div>
          <InputField title="Email" type="general" className="between" />
          <InputField title="Password" type="password" className="between" />
          <Button title="login" onClick={handleLogin} />
        </div>
      </Card>
    </div>
  );
}
