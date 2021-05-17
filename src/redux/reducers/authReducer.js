import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { loginRequest, loginSuccess, loginError } from "../actions/Action";

const initialUserState = {
  accessToken: null,
  userData: {
    email: null,
    id: null,
  },
};

const user = createReducer(
  { ...initialUserState },
  {
    [loginSuccess]: (_, { payload }) => payload,
    // [refreshSuccess]: (state, { payload }) => ({
    //   ...state,
    //   accessToken: payload.newAccessToken,
    //   refreshToken: payload.newRefreshToken,
    //   sid: payload.newSid,
    // }),
  }
);

const loading = createReducer(false, {
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
});

const error = createReducer(null, {
  [loginError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user,

  error,
  loading,
});

export { authReducer };
