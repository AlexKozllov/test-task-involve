import React from "react";

const PurchaseForm = ({ payment, methods }) => {
  return (
    <label>
      {payment}
      {/* <select value={this.state.value} onChange={this.handleChange}> */}
      <select>
        {methods.map((item) => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
        {/* <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option> */}
      </select>
    </label>
  );
};

export default PurchaseForm;
