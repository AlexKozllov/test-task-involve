import React from "react";
import LoaderSpinner from "react-loader-spinner";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.modalLoader}>
      <div className={s.loader}></div>
    </div>
  );
};

export default Loader;
