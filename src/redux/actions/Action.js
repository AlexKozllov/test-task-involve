import { createAction } from "@reduxjs/toolkit";

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

export { loginRequest, loginSuccess, loginError };
