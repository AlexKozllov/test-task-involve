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
  const { base, amount, invoicePayMethod, withdrawPayMethod } =
    getState().payMethods.setCalculate;
  // console.log("payMethods: ", payMethods.setCalculate);
  dispatch(getCalculateRequest());
  try {
    const res = await getCalculate(
      base,
      amount,
      invoicePayMethod,
      withdrawPayMethod
    );
    console.log("res: ", res);
    // dispatch(getCalculateSuccess(res));
  } catch (error) {
    dispatch(getCalculateError(error));
  }
};

export { getPayMethods, getResCalculate };
