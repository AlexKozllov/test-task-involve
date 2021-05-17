import React, { useEffect } from "react";
import { getCalculate, getMethods, postBids } from "../../../servises/reqToApi";

const MainPage = () => {
  useEffect(() => {
    // getMethods();
    // getCalculate("invoice", 50, 5, 4);
    // postBids(50, "invoice", 5, 4);
  }, []);

  return <h2>mainpage</h2>;
};

export default MainPage;
