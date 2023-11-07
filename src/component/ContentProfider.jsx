import React from "react";

export default function ContentProfider({ children }) {
  return (
    <div className="container">
      <div className="content-container">{children}</div>
    </div>
  );
}
