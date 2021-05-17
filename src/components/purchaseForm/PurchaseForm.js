import React from "react";
import { SelectLabel } from "./styleForm";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import Loader from "../loader/Loader";

const PurchaseForm = ({ payment, methods }) => {
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
      isLoading={false}
      isClearable={false}
      isSearchable={true}
      name="color"
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          color: "red",
          primary25: "#F4F4F4",
          primary: "blue",
        },
      })}
      options={methods.reduce((acc, item) => {
        acc.push({ value: item.id, label: item.name });
        console.log(acc);
        return acc;
      }, [])}
    />
  );
};

export default PurchaseForm;
