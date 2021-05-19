import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
  setCalculatePayMethod,
  getCalculateSuccess,
  invoiceAmoumt,
  withdrawAmoumt,
} from "../actions/mainAction";

const initialMethods = { invoice: [], withdraw: [] };
const initialCalculate = {
  base: "",
  amount: 100,
  invoicePayMethod: null,
  withdrawPayMethod: null,
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

// const setCalculate = createReducer(
//   { ...initialCalculate },
//   {
//     [setCalculateAmoumt]: (state, { payload }) => ({ ...state, ...payload }),
//     [setCalculatePayMethod]: (state, { payload }) => ({
//       ...state,
//       base: payload.payment,
//       invoicePayMethod:
//         payload.payment === "invoice" ? payload.value : state.invoicePayMethod,
//       withdrawPayMethod:
//         payload.payment === "withdraw"
//           ? payload.value
//           : state.withdrawPayMethod,
//     }),
//     [getCalculateSuccess]: (state, { payload }) => ({
//       ...state,
//       amount: payload.amount,
//     }),
//   }
// );

const loading = createReducer(false, {
  [payMethodsRequest]: () => true,
  [payMethodsSuccess]: () => false,
  [payMethodsError]: () => false,
});

const error = createReducer(null, {
  [payMethodsError]: (_, { payload }) => payload,
});
const setCalculate = combineReducers({ sell, buy });
const mainReduser = combineReducers({
  methods,
  setCalculate,
  error,
  loading,
});

export { mainReduser };
