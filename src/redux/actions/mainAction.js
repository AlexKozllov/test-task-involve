import { createAction } from "@reduxjs/toolkit";

const payMethodsRequest = createAction("mainPage/payMethodsRequest");
const payMethodsSuccess = createAction("mainPage/payMethodsSuccess");
const payMethodsError = createAction("mainPage/payMethodsError");

// const setCalculateRequest = createAction("mainPage/setCalculateRequest");
const setCalculatePayMethod = createAction("mainPage/setCalculatePayMethod");
const setCalculateAmoumt = createAction("mainPage/setCalculateAmoumt");
const invoiceAmoumt = createAction("mainPage/invoiceAmoumt");
const withdrawAmoumt = createAction("mainPage/withdrawAmoumt");
// const setCalculateError = createAction("mainPage/setCalculateError");
const getCalculateRequest = createAction("mainPage/getCalculateRequest");
const getCalculateSuccess = createAction("mainPage/getCalculateSuccess");
const getCalculateError = createAction("mainPage/getCalculateError");

const postTransactionRequest = createAction("mainPage/postTransactionRequest");
const postTransactionSuccess = createAction("mainPage/postTransactionSuccess");
const postTransactionError = createAction("mainPage/postTransactionError");

export {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
  setCalculatePayMethod,
  setCalculateAmoumt,
  invoiceAmoumt,
  withdrawAmoumt,
  getCalculateRequest,
  getCalculateSuccess,
  getCalculateError,
  postTransactionRequest,
  postTransactionSuccess,
  postTransactionError,
  //   setCalculateSuccess,
  //   setCalculateError,
};
