import axios from "axios";

axios.defaults.baseURL = "https://involve.software/test_front/api";

const getMethods = async () => {
  try {
    const response = await axios.get("/payMethods");

    console.log(`response.data`, response.data);

    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const getCalculate = async (
  base,
  amount,
  invoicePayMethod,
  withdrawPayMethod
) => {
  try {
    const response = await axios.get("/payMethods/calculate", {
      params: {
        base,
        amount,
        invoicePayMethod,
        withdrawPayMethod,
      },
    });

    console.log(`response.data`, response.data);

    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const postBids = async (amount, base, invoicePayMethod, withdrawPayMethod) => {
  try {
    const response = await axios.post("/bids", {
      amount,
      base,
      invoicePayMethod,
      withdrawPayMethod,
    });

    console.log(`response.data`, response.data);

    return await response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export { getMethods, getCalculate, postBids };
