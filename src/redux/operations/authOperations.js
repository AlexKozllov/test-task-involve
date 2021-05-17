import { loginRequest, loginSuccess, loginError } from "../actions/authAction";
import { postSignInUser } from "../../servises/reqToApi";

const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const user = await postSignInUser(credentials);

    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export { logIn };
