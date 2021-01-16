import React from "react";
import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <div className={"app"}>
      <div className="container">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
