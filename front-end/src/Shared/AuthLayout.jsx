import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className={"app"}>
      <div className="container">{children}</div>
    </div>
  );
}
