import { createAction } from "@reduxjs/toolkit";

const payMethodsRequest = createAction("auth/payMethodsRequest");
const payMethodsSuccess = createAction("auth/payMethodsSuccess");
const payMethodsError = createAction("auth/payMethodsError");

export { payMethodsRequest, payMethodsSuccess, payMethodsError };
