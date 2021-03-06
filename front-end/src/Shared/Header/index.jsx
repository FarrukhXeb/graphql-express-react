import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { authContext } from "../../Context/AuthContext";
import style from "./style.module.css";
export default function Header() {
  const {
    auth: { isAuthenticated },
    logOut,
  } = useContext(authContext);
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
          {isAuthenticated ? (
            <li className={style.btnLink}>
              <Button onClick={logOut}>Log Out</Button>
            </li>
          ) : (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
