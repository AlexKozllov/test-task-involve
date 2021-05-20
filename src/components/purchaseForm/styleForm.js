import styled from "styled-components";

const SelectLabel = styled.div`
  margin: 28px 32px;
  & h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  }
`;

const InputContainer = styled.div`
  width: 313px;
  height: 46px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  input {
    width: 313px;
    height: 44px;

    padding-left: 20px;
    border: none;
    border-radius: 5px;
    outline: none;
    display: block;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

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
export { SelectLabel, customStyles, InputContainer };
