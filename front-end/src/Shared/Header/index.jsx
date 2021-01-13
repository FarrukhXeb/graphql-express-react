import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
export default function Header() {
  return (
    <header className={style.wrapper}>
      <div className={style.logo}>
        <h2>Logo</h2>
      </div>
      <nav className={style.nav}>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
