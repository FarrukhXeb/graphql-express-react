import React from "react";
import style from "./style.module.css";

export default function Button(props) {
  const { children } = props;
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  );
}
