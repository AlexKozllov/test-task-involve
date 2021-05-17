import React from "react";
import LoaderSpinner from "react-loader-spinner";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.modalLoader}>
      <LoaderSpinner
        className={s.loader}
        type="ThreeDots"
        color="#3f51b5"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
