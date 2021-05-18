import Select from "react-select";
import styled from "styled-components";

const SelectLabel = styled(Select)`
  font-family: Roboto;
  /* font-size: 48px; */
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0em;
  text-align: left;
  .select__control--is-focused {
    display: flex;
  }
  .select__control {
    display: flex;
  }
  select {
    font-family: Roboto;
    /* font-size: 18px; */
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;

    /* &:focus-visible::hover {
      background-color: #f4f4f4;
      color: red;
    } */
  }
`;

export { SelectLabel };
