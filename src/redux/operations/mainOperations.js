import { getMethods, getCalculate } from "../../servises/reqToApi";
import {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
  getCalculateRequest,
  getCalculateSuccess,
  getCalculateError,
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
    }
    if (buy.base && buy.invoicePayMethod && buy.withdrawPayMethod) {
      const res = await getCalculate(
        buy.base,
        buy.amount,
        buy.invoicePayMethod,
        buy.withdrawPayMethod
      );
      dispatch(getCalculateSuccess(res));
    }
  } catch (error) {
    dispatch(getCalculateError(error));
  }
};

export { getPayMethods, getResCalculate };
