import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
  setCalculateAmoumt,
  setCalculatePayMethod,
} from "../actions/mainAction";
import { setCalculateRequest } from "../actions/mainAction";

const initialMethods = { invoice: [], withdraw: [] };
const initialCalculate = {
  base: "",
  amount: null,
  invoicePayMethod: null,
  withdrawPayMethod: null,
};

const methods = createReducer(
  { ...initialMethods },
  {
    [payMethodsSuccess]: (_, { payload }) => ({ ...payload }),
    // [refreshSuccess]: (state, { payload }) => ({
    //   ...state,
    //   accessToken: payload.newAccessToken,
    //   refreshToken: payload.newRefreshToken,
    //   sid: payload.newSid,
    // }),
  }
);

const setCalculate = createReducer(
  { ...initialCalculate },
  {
    [setCalculateAmoumt]: (state, { payload }) => ({ ...state, ...payload }),
    [setCalculatePayMethod]: (state, { payload }) => ({
      ...state,
      base: payload.payment,
      invoicePayMethod:
        payload.payment === "invoice" ? payload.value : state.invoicePayMethod,
      withdrawPayMethod:
        payload.payment === "withdraw"
          ? payload.value
          : state.withdrawPayMethod,
    }),
  }
);

const loading = createReducer(false, {
  [payMethodsRequest]: () => true,
  [payMethodsSuccess]: () => false,
  [payMethodsError]: () => false,
});

const error = createReducer(null, {
  [payMethodsError]: (_, { payload }) => payload,
});

const mainReduser = combineReducers({
  methods,
  setCalculate,
  error,
  loading,
});

export { mainReduser };
