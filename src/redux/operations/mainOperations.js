import { getMethods, getCalculate } from "../../servises/reqToApi";
import {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
  getCalculateRequest,
  getCalculateSuccess,
  getCalculateError,
  withdrawAmoumt,
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
  console.log("invoice: ", sell);
  dispatch(getCalculateRequest());
  try {
    if (sell.base) {
      const res = await getCalculate(
        sell.base,
        sell.amount,
        sell.invoicePayMethod,
        sell.withdrawPayMethod
      );
      dispatch(getCalculateSuccess(res));
      // dispatch(withdrawAmoumt(res));
      console.log("res: ", res);
    }
    if (buy.base) {
      const res = await getCalculate(
        buy.base,
        buy.amount,
        buy.invoicePayMethod,
        buy.withdrawPayMethod
      );
      dispatch(getCalculateSuccess(res));
      // dispatch(withdrawAmoumt(res));
      console.log("res: ", res);
    }
  } catch (error) {
    dispatch(getCalculateError(error));
  }
};

export { getPayMethods, getResCalculate };
