import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPayMethods } from "../../../redux/operations/mainOperations";
import PurchaseForm from "../../purchaseForm/PurchaseForm";

const MainPage = () => {
  const dispatch = useDispatch();
  const payMethods = useSelector((state) => state.payMethods.methods);
  useEffect(() => {
    dispatch(getPayMethods());
  }, []);

  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <PurchaseForm
          payment={"Sell"}
          methods={payMethods.invoice}
        ></PurchaseForm>
        <PurchaseForm
          payment={"Buy"}
          methods={payMethods.withdraw}
        ></PurchaseForm>
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

export default MainPage;
