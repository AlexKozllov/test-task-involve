import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { getPayMethods } from "../../../redux/operations/mainOperations";
import routers from "../../../routers/routers";

import PurchaseForm from "../../purchaseForm/PurchaseForm";
import { MainPageStyles, SelectWrapper, SelectButton } from "./MainPageStyles";

import {
  payMethods,
  preCalculation,
} from "../../../redux/selectors/mainSelector";

const MainPage = () => {
  const dispatch = useDispatch();
  const methods = useSelector((state) => payMethods(state));
  const calculation = useSelector((state) => preCalculation(state));
  const history = useHistory();
  const { sell: currentSell, buy: currentBuy } = calculation;
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
            methods={methods.invoice}
            currentAmount={currentSell.amount}
          ></PurchaseForm>
          <PurchaseForm
            payment="withdraw"
            methods={methods.withdraw}
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
