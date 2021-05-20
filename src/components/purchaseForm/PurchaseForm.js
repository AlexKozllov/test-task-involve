import React from "react";
import { customStyles, SelectLabel, InputContainer } from "./styleForm";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  invoiceAmoumt,
  setCalculatePayMethod,
  withdrawAmoumt,
} from "../../redux/actions/mainAction";
import { getResCalculate } from "../../redux/operations/mainOperations";
import { useDebouncedCallback } from "use-debounce/lib";
import { findDefaultMethod } from "../../utils/findUtils";
import LoaderInput from "../loaderInput/LoaderInput";
import { payMethods, preCalculation } from "../../redux/selectors/mainSelector";

const PurchaseForm = ({ payment, methods, currentAmount }) => {
  const dispatch = useDispatch();
  const staeMethods = useSelector((state) => payMethods(state));
  const calculation = useSelector((state) => preCalculation(state));

  const { sell, buy, loadingInput } = calculation;
  const { invoice, withdraw } = staeMethods;

  const dataPreparation = () =>
    methods.reduce((acc, item) => {
      acc.push({ value: item.id, label: item.name });
      return acc;
    }, []);

  const isValid = (value) => {
    return !isNaN(value);
  };

  const debouncedFetch = useDebouncedCallback((value) => {
    dispatch(getResCalculate());
  }, 300);

  const handleInputAmount = (e) => {
    const { value } = e.target;
    const { base } = e.target.dataset;
    if (isValid(value)) {
      payment === "invoice" &&
        dispatch(invoiceAmoumt({ amount: Number(value), base }));
      payment === "withdraw" &&
        dispatch(withdrawAmoumt({ amount: Number(value), base }));
      debouncedFetch();
    }
  };

  const defaultValue = () => {
    if (payment === "invoice") {
      const value = findDefaultMethod(sell.invoicePayMethod, invoice);
      return {
        value: value.id,
        label: value.name,
      };
    }
    if (payment === "withdraw") {
      const value = findDefaultMethod(buy.withdrawPayMethod, withdraw);
      return {
        value: value.id,
        label: value.name,
      };
    }
  };

  const handlSelect = (e) => {
    dispatch(setCalculatePayMethod({ payment, value: e.value }));
    dispatch(getResCalculate());
  };
  return (
    <SelectLabel>
      <h3>{payment === "invoice" && "Sell"}</h3>
      <h3>{payment === "withdraw" && "Buy"}</h3>
      {methods.length > 0 && (
        <Select
          className="basic-single"
          classNamePrefix="select"
          data-base={payment}
          defaultValue={defaultValue()}
          onChange={handlSelect}
          isLoading={false}
          name={payment}
          styles={customStyles}
          theme={(theme) => {
            return {
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "#F4F4F4",
                primary50: "#58B4AE",
                primary: "#58B4AE",
                neutral60: "#58B4AE",
              },
            };
          }}
          options={dataPreparation()}
        />
      )}
      <InputContainer>
        <input
          type="text"
          data-base={payment}
          value={currentAmount}
          onChange={handleInputAmount}
        />
        {loadingInput && <LoaderInput />}
      </InputContainer>
    </SelectLabel>
  );
};

export default PurchaseForm;
