import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
  getPayMethods,
  getResCalculate,
} from "../../../redux/operations/mainOperations";
import routers from "../../../routers/routers";
import { getCalculate } from "../../../servises/reqToApi";

import PurchaseForm from "../../purchaseForm/PurchaseForm";
import { MainPageStyles, SelectWrapper, SelectButton } from "./MainPageStyles";

const MainPage = () => {
  const dispatch = useDispatch();
  const payMethods = useSelector((state) => state.payMethods.methods);
  const currentSell = useSelector(
    (state) => state.payMethods.setCalculate.sell
  );
  const currentBuy = useSelector((state) => state.payMethods.setCalculate.buy);
  const history = useHistory();

  useEffect(() => {
    dispatch(getPayMethods());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentSell.base || currentBuy.base) {
      history.push(routers.info);
    }
  };

  return (
    <MainPageStyles>
      <form onSubmit={handleSubmit}>
        <SelectWrapper className="">
          <PurchaseForm
            payment="invoice"
            methods={payMethods.invoice}
            currentAmount={currentSell.amount}
          ></PurchaseForm>
          <PurchaseForm
            payment="withdraw"
            methods={payMethods.withdraw}
            currentAmount={currentBuy.amount}
          ></PurchaseForm>
        </SelectWrapper>
        <SelectButton type="submit" value="Отправить" />
      </form>
    </MainPageStyles>
  );
};

export default MainPage;
