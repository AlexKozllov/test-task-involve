import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Loader from "../../loader/Loader";
import { postTransaction } from "../../../redux/operations/mainOperations";
import routers from "../../../routers/routers";
import { findPayMethod } from "../../../utils/findUtils";
import {
  Buttons,
  CancelButtons,
  Details,
  DetailsItem,
  ConfirmButtons,
} from "./InfoPageStyles";
import {
  payMethods,
  preCalculation,
  loading,
} from "../../../redux/selectors/mainSelector";

const InfoPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const calculation = useSelector((state) => preCalculation(state));
  const methods = useSelector((state) => payMethods(state));
  const isLoading = useSelector((state) => loading(state));

  const { invoice, withdraw } = methods;
  const { sell, buy } = calculation;

  useEffect(() => {
    !sell.amount | !buy.amount && history.push(routers.main);
  }, []);

  const handleCancel = () => {
    history.push(routers.main);
  };

  const handleConfirm = async () => {
    await dispatch(postTransaction());
    history.push(routers.success);
  };

  return (
    <div>
      {isLoading && <Loader />}
      {sell.amount | buy.amount && (
        <Details>
          <h3>Details</h3>
          <div>
            <DetailsItem>
              <p>Sell</p>
              <p>{`${sell.amount} ${findPayMethod(
                sell.invoicePayMethod,
                invoice
              )}`}</p>
            </DetailsItem>
            <DetailsItem>
              <p>Buy</p>
              <p>{`${buy.amount} ${findPayMethod(
                buy.withdrawPayMethod,
                withdraw
              )}`}</p>
            </DetailsItem>
          </div>
          <Buttons>
            <CancelButtons onClick={handleCancel}>Cancel</CancelButtons>
            <ConfirmButtons onClick={handleConfirm}>Confirm</ConfirmButtons>
          </Buttons>
        </Details>
      )}
    </div>
  );
};

export default InfoPage;
