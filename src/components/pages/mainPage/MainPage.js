import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPayMethods } from "../../../redux/operations/mainOperations";
import PurchaseForm from "../../purchaseForm/PurchaseForm";
import { MainPageStyles, SelectWrapper, SelectButton } from "./MainPageStyles";

const MainPage = () => {
  const dispatch = useDispatch();
  const payMethods = useSelector((state) => state.payMethods.methods);
  useEffect(() => {
    dispatch(getPayMethods());
  }, []);

  const handleSubmit = () => {};

  return (
    <MainPageStyles>
      <form onSubmit={handleSubmit}>
        <SelectWrapper className="">
          <PurchaseForm
            payment={"Sell"}
            methods={payMethods.invoice}
          ></PurchaseForm>

          <PurchaseForm
            payment={"Buy"}
            methods={payMethods.withdraw}
          ></PurchaseForm>
        </SelectWrapper>
        <SelectButton type="submit" value="Отправить" />
      </form>
    </MainPageStyles>
  );
};

export default MainPage;
