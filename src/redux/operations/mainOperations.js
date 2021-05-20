import { getMethods, getCalculate, postBids } from "../../servises/reqToApi";
import {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
  getCalculateRequest,
  getCalculateSuccess,
  getCalculateError,
  postTransactionRequest,
  postTransactionSuccess,
  postTransactionError,
} from "../actions/mainAction";

const getPayMethods = () => async (dispatch) => {
  dispatch(payMethodsRequest());
  try {
    const methods = await getMethods();

    dispatch(payMethodsSuccess(methods));
  } catch (error) {
    dispatch(payMethodsError(error));
  }
};

const getResCalculate = () => async (dispatch, getState) => {
  const { sell, buy } = getState().payMethods.setCalculate;
  dispatch(getCalculateRequest());
  try {
    if (sell.base && sell.invoicePayMethod && sell.withdrawPayMethod) {
      const res = await getCalculate(
        sell.base,
        sell.amount,
        sell.invoicePayMethod,
        sell.withdrawPayMethod
      );
      dispatch(getCalculateSuccess(res));
      return;
    }
    if (buy.base && buy.invoicePayMethod && buy.withdrawPayMethod) {
      const res = await getCalculate(
        buy.base,
        buy.amount,
        buy.invoicePayMethod,
        buy.withdrawPayMethod
      );
      dispatch(getCalculateSuccess(res));
      return;
    }
  } catch (error) {
    dispatch(getCalculateError(error));
  }
};

const postTransaction = () => async (dispatch, getState) => {
  const { sell, buy } = getState().payMethods.setCalculate;
  dispatch(postTransactionRequest());
  try {
    if (sell.base && sell.invoicePayMethod && sell.withdrawPayMethod) {
      const res = await postBids(
        sell.amount,
        sell.base,
        sell.invoicePayMethod,
        sell.withdrawPayMethod
      );
      dispatch(postTransactionSuccess(res));
      return;
    }
    if (buy.base && buy.invoicePayMethod && buy.withdrawPayMethod) {
      const res = await postBids(
        buy.amount,
        buy.base,
        buy.invoicePayMethod,
        buy.withdrawPayMethod
      );
      dispatch(postTransactionSuccess(res));
      return;
    }
  } catch (error) {
    dispatch(postTransactionError(error));
  }
};

export { getPayMethods, getResCalculate, postTransaction };
