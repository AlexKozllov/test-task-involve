import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
  setCalculatePayMethod,
  getCalculateSuccess,
  invoiceAmoumt,
  withdrawAmoumt,
  postTransactionSuccess,
  getCalculateRequest,
  getCalculateError,
  postTransactionRequest,
  postTransactionError,
} from "../actions/mainAction";

const initialMethods = { invoice: [], withdraw: [] };
const initialCalculate = {
  base: "",
  amount: "",
  invoicePayMethod: 3,
  withdrawPayMethod: 6,
};
const initialBids = {
  message: "",
};

const methods = createReducer(
  { ...initialMethods },
  {
    [payMethodsSuccess]: (_, { payload }) => ({ ...payload }),
  }
);

const sell = createReducer(
  { ...initialCalculate },
  {
    [invoiceAmoumt]: (state, { payload }) => ({ ...state, ...payload }),
    [withdrawAmoumt]: (state, { payload }) => ({ ...state, base: false }),
    [setCalculatePayMethod]: (state, { payload }) => ({
      ...state,
      base: payload.payment === "invoice" && payload.payment,
      invoicePayMethod:
        payload.payment === "invoice" ? payload.value : state.invoicePayMethod,
      withdrawPayMethod:
        payload.payment === "withdraw"
          ? payload.value
          : state.withdrawPayMethod,
    }),
    [getCalculateSuccess]: (state, { payload }) => ({
      ...state,
      amount: !state.base ? payload.amount : state.amount,
    }),
  }
);

const buy = createReducer(
  { ...initialCalculate },
  {
    [withdrawAmoumt]: (state, { payload }) => ({ ...state, ...payload }),
    [invoiceAmoumt]: (state, { payload }) => ({ ...state, base: false }),
    [setCalculatePayMethod]: (state, { payload }) => ({
      ...state,
      base: payload.payment === "withdraw" && payload.payment,
      invoicePayMethod:
        payload.payment === "invoice" ? payload.value : state.invoicePayMethod,
      withdrawPayMethod:
        payload.payment === "withdraw"
          ? payload.value
          : state.withdrawPayMethod,
    }),
    [getCalculateSuccess]: (state, { payload }) => ({
      ...state,
      amount: !state.base ? payload.amount : state.amount,
    }),
  }
);

const loadingInput = createReducer(false, {
  [getCalculateRequest]: () => true,
  [getCalculateSuccess]: () => false,
  [getCalculateError]: () => false,
});

const responseBids = createReducer(
  { ...initialBids },
  {
    [postTransactionSuccess]: (state, { payload }) => ({
      ...payload,
    }),
  }
);

const loading = createReducer(false, {
  [payMethodsRequest]: () => true,
  [payMethodsSuccess]: () => false,
  [payMethodsError]: () => false,
  [postTransactionRequest]: () => true,
  [postTransactionSuccess]: () => false,
  [postTransactionError]: () => false,
});

const error = createReducer(null, {
  [payMethodsError]: (_, { payload }) => payload,
  [payMethodsRequest]: () => "",
  [payMethodsSuccess]: () => "",
  [postTransactionError]: (_, { payload }) => payload,
  [payMethodsRequest]: () => "",
  [payMethodsSuccess]: () => "",
  [getCalculateError]: (_, { payload }) => payload,
  [getCalculateRequest]: () => "",
  [getCalculateSuccess]: () => "",
});
const setCalculate = combineReducers({ sell, buy, loadingInput });
const mainReduser = combineReducers({
  methods,
  setCalculate,
  responseBids,
  error,
  loading,
});

export { mainReduser };
