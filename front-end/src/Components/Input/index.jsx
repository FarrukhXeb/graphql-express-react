import React from "react";
import style from "./style.module.css";

export default function Input({ feedback, ...rest }) {
  return (
    <div className={style.wrapper}>
      <input {...rest} />
    </div>
  );
}
