const payMethods = (state) => {
  return state.payMethods.methods;
};

const preCalculation = (state) => {
  return state.payMethods.setCalculate;
};

const loading = (state) => {
  return state.payMethods.loading;
};

const responseBids = (state) => {
  return state.payMethods.responseBids;
};

export { payMethods, preCalculation, loading, responseBids };
