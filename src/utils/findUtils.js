const findPayMethod = (id, method) => {
  const item = method.find((item) => item.id === id);
  return item.name;
};
const findDefaultMethod = (id, method) => {
  const item = method.find((item) => item.id === id);
  return item;
};

export { findPayMethod, findDefaultMethod };
