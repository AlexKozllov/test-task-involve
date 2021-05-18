import React, { useState } from "react";
import { SelectLabel } from "./styleForm";
import Select from "react-select";
import { useDispatch } from "react-redux";
import {
  setCalculateAmoumt,
  setCalculatePayMethod,
} from "../../redux/actions/mainAction";

const PurchaseForm = ({ payment, methods }) => {
  const [amount, setAmount] = useState(100);
  const dispatch = useDispatch();

  const customStyles = {
    option: (provided, state) => {
      return {
        ...provided,
        padding: 5,
        fontSize: 18,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        textAlign: "left",
      };
    },
    control: (provided, state) => {
      return {
        border: state.menuIsOpen ? "1px solid #58B4AE" : "1px solid #CBCBCB",

        borderRadius: 4,

        width: 313,
        height: 46,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        fontSize: 18,
        fontFamily: "Roboto",

        fontStyle: "normal",
        fontWeight: 500,
        textAlign: "left",
      };
    },

    menu: (provided, state) => {
      return {
        ...provided,
        width: 313,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)",
        borderRadius: 4,
        color: state.selectProps.menuColor,
        padding: 5,
      };
    },
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return {
        ...provided,
        opacity,
        transition,
      };
    },
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
  };

  const dataPreparation = () =>
    methods.reduce((acc, item) => {
      acc.push({ value: item.id, label: item.name });
      return acc;
    }, []);
  const data = methods.length > 0 && dataPreparation();
  console.log("data: ", data);

  const handleInputAmount = (e) => {
    const { value } = e.target;
    const { base } = e.target.dataset;
    console.log("e.target: ", e);
    setAmount(value);
    dispatch(setCalculateAmoumt({ amount: value, base }));
  };

  const handlSelect = (e) => {
    console.log(e);
    dispatch(setCalculatePayMethod({ payment, value: e.value }));
  };
  console.dir(Select);
  return (
    <SelectLabel>
      <h3>{payment === "invoice" && "Sell"}</h3>
      <h3>{payment === "withdraw" && "Buy"}</h3>
      <Select
        className="basic-single"
        classNamePrefix="select"
        data-base={payment}
        defaultValue={data[0]}
        onChange={handlSelect}
        isLoading={false}
        isClearable={false}
        isSearchable={true}
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
      <input
        type="text"
        data-base={payment}
        value={amount}
        onChange={handleInputAmount}
      />
    </SelectLabel>
  );
};

export default PurchaseForm;

// <SelectLabel
//   className="basic-single"
//   classNamePrefix="select"
//   //   defaultValue={methods[1]}
//   //   isDisabled={isDisabled}
//   isLoading={false}
//   isClearable={false}
//   isSearchable={true}
//   name="color"

//   theme={(theme) => ({
//     ...theme,
//     borderRadius: 0,
//     colors: {
//       ...theme.colors,
//       neutral5: "red",
//       primary25: "#F4F4F4",
//       primary: "#58B4AE",
//     },
//   })}
//   options={methods.reduce((acc, item) => {
//     acc.push({ value: item.id, label: item.name });
//     console.log(acc);
//     return acc;
//   }, [])}
// />
