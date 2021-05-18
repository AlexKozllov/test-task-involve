import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPayMethods,
  getResCalculate,
} from "../../../redux/operations/mainOperations";
import { getCalculate } from "../../../servises/reqToApi";

import PurchaseForm from "../../purchaseForm/PurchaseForm";
import { MainPageStyles, SelectWrapper, SelectButton } from "./MainPageStyles";

const MainPage = () => {
  const dispatch = useDispatch();
  const payMethods = useSelector((state) => state.payMethods.methods);

  useEffect(() => {
    dispatch(getPayMethods());
    // dispatch(getCalculate("invoice", 50, 4, 6));
  }, []);

  console.log("payMethods: ", payMethods);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getResCalculate());
  };

  return (
    <MainPageStyles>
      <form onSubmit={handleSubmit}>
        <SelectWrapper className="">
          <PurchaseForm
            payment="invoice"
            methods={payMethods.invoice}
          ></PurchaseForm>
          <PurchaseForm
            payment="withdraw"
            methods={payMethods.withdraw}
          ></PurchaseForm>
        </SelectWrapper>
        <SelectButton type="submit" value="Отправить" />
      </form>
    </MainPageStyles>
  );
};

export default MainPage;
