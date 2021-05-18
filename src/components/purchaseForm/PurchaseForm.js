import React from "react";
import { SelectLabel } from "./styleForm";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import Loader from "../loader/Loader";

const PurchaseForm = ({ payment, methods }) => {
  const customStyles = {
    option: (provided, state) => {
      console.log(`provided`, provided);
      return {
        ...provided,

        // borderBottom: "6px dotted pink",
        color: "#000",
        padding: 5,

        onFocus: { border: "10px solid red" },
      };
    },
    control: () => ({
      // none of react-select's styles are passed to <Control />
      border: "1px solid #CBCBCB",
      borderRadius: 4,

      width: 500,
    }),
    // valueContainer: (provided, state) => {
    //   console.log("providedVVVVV: ", provided);

    //   return {
    //     // border: "1px solid #58B4AE",
    //     height: 50,
    //     focus: { border: "1px solid #58B4AE" },
    //     display: "flex",
    //     flexDirection: "row",
    //   };
    // },
    menu: (provided, state) => {
      console.log(state);
      return {
        ...provided,
        width: state.selectProps.width,
        // borderBottom: "30px solid pink",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)",
        borderRadius: 4,
        color: state.selectProps.menuColor,
        padding: 5,
      };
    },
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      // const hover = { border: "10px solid #58B4AE" };
      return {
        ...provided,
        opacity,
        transition,
        height: 50,
        // focus: { border: "1px solid #58B4AE" },
        // display: "flex",
        // flexDirection: "row",
      };
    },
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
    // theme: (theme) => ({
    //   ...theme,

    //   colors: {
    //     ...theme.colors,

    //     primary25: "#F4F4F4",
    //     primary: "#58B4AE",
    //   },
    // }),
  };

  return (
    // <SelectLabel>
    //   {payment}
    //   {/* <select value={this.state.value} onChange={this.handleChange}> */}
    //   <select>
    //     {methods.map((item) => {
    //       return (
    //         <option key={item.id} value={item.name}>
    //           {item.name}
    //         </option>
    //       );
    //     })}
    //   </select>
    // </SelectLabel>
    // <AsyncSelect
    //   cacheOptions
    //   loadOptions={methods}
    //   defaultOptions
    //   //   onInputChange={this.handleInputChange}
    // />

    <SelectLabel
      className="basic-single"
      classNamePrefix="select"
      //   defaultValue={methods[1]}
      //   isDisabled={isDisabled}
      autoFocus={true}
      isLoading={false}
      isClearable={false}
      isSearchable={true}
      name="color"
      styles={customStyles}
      theme={(theme) => {
        console.log("theme: ", theme);
        return {
          ...theme,

          colors: {
            ...theme.colors,

            primary25: "#F4F4F4",
            primary50: "#58B4AE",
            primary: "#58B4AE",
          },
        };
      }}
      options={methods.reduce((acc, item) => {
        acc.push({ value: item.id, label: item.name });
        // console.log(acc);
        return acc;
      }, [])}
    />
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
