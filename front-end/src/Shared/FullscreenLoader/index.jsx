import React from "react";
import Loader from "react-loader-spinner";
import style from "./style.module.css";
export default function FullscreenLoader() {
  return (
    <div className={style.wrapper}>
      <Loader type="Puff" color="#0fd158" height={100} width={100} />
    </div>
  );
}
