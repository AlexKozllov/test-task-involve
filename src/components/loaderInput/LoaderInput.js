import React from "react";
import LoaderSpinner from "react-loader-spinner";
import s from "./LoaderInput.module.scss";

const LoaderInput = () => {
  return (
    <div className={s.modalLoader}>
      <LoaderSpinner
        className={s.loader}
        type="TailSpin"
        color="#3E7E7C"
        height={18}
        width={18}
      />
    </div>
  );
};

export default LoaderInput;
