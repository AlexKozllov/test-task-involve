import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { getPayMethods } from "../../../redux/operations/mainOperations";
import routers from "../../../routers/routers";

import PurchaseForm from "../../purchaseForm/PurchaseForm";
import { MainPageStyles, SelectWrapper, SelectButton } from "./MainPageStyles";

const MainPage = () => {
  const dispatch = useDispatch();
  const payMethods = useSelector((state) => state.payMethods.methods);

  const history = useHistory();
  const preCalculation = useSelector((state) => state.payMethods.setCalculate);
  const { sell: currentSell, buy: currentBuy } = preCalculation;
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

        <SelectButton
          type="submit"
          disabled={!currentSell.amount || !currentBuy.amount}
          value="Exchange"
        />
      </form>
    </MainPageStyles>
  );
};

export default MainPage;
