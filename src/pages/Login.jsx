import React from "react";
import InputField from "../component/InputField";

export default function Login() {
  return (
    <div className="container">
      <div className="card">
        <div>
          <h1>Ommaleka</h1>
        </div>
        <InputField title="Email" type="general" />
        <InputField title="Password" type="password" />
        
      </div>
    </div>
  );
}
