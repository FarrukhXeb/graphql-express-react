import React from "react";
import style from "./style.module.css";

export default function Dropdown({ placeholder, children, ...rest }) {
  return (
    <div className={style.wrapper}>
      <select placeholder={placeholder} {...rest}>
        {children}
      </select>
    </div>
  );
}
