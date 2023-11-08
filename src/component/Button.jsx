import React from "react";

export default function Button({ title, onClick, className }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {title}
    </button>
  );
}
