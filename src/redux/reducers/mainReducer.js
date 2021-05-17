import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  payMethodsRequest,
  payMethodsSuccess,
  payMethodsError,
} from "../actions/mainAction";

const initialUserState = { invoice: [], withdraw: [] };

const methods = createReducer(
  { ...initialUserState },
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
  error,
  loading,
});

export { mainReduser };
