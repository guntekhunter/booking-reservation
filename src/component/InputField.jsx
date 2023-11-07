import React, { useEffect, useState } from "react";

export default function InputField({ title, type }) {
  const [inputType, setInputType] = useState("text");

  useEffect(() => {
    if (type === "password") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  }, [type]);
  return (
    <div className="input-field">
      <p className="label">{title}</p>
      <input type={inputType} className="input-field" />
    </div>
  );
}