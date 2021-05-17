import axios from "axios";

axios.defaults.baseURL = "https://protest-backend.goit.global";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unSet() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

const postSignInUser = async (user) => {
  try {
    const userData = await axios.post("/auth/login", user);
    // await token.set(userData.data.accessToken);

    return await userData.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export { postSignInUser };
