import { createAction } from "@reduxjs/toolkit";

const payMethodsRequest = createAction("mainPage/payMethodsRequest");
const payMethodsSuccess = createAction("mainPage/payMethodsSuccess");
const payMethodsError = createAction("mainPage/payMethodsError");

// const setCalculateRequest = createAction("mainPage/setCalculateRequest");
const setCalculatePayMethod = createAction("mainPage/setCalculatePayMethod");
const setCalculateAmoumt = createAction("mainPage/setCalculateAmoumt");
// const setCalculateError = createAction("mainPage/setCalculateError");
const getCalculateRequest = createAction("mainPage/getCalculateRequest");
const getCalculateSuccess = createAction("mainPage/getCalculateSuccess");
const getCalculateError = createAction("mainPage/getCalculateError");

export {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
  setCalculatePayMethod,
  setCalculateAmoumt,
  getCalculateRequest,
  getCalculateSuccess,
  getCalculateError,
  //   setCalculateSuccess,
  //   setCalculateError,
};
