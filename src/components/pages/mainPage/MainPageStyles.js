import styled from "styled-components";

const MainPageStyles = styled.div`
  margin: 0 auto;
  width: 754px;
  height: 344px;
  box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.08);
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SelectButton = styled.input`
  display: block;
  width: 125px;
  height: 48px;
  margin: 0 auto;
  background: #58b4ae;
  color: #fff;
  font-family: "Roboto-700";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  border: none;
  border-radius: 5px;
  transition: all ease-in 150ms;
  :hover {
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
    transform: translate(-3px, -3px);
    transition: all ease-in 150ms;
  }
  :disabled {
    background: #58b4ae91;
    box-shadow: none;
    transform: none;
  }
`;

export { MainPageStyles, SelectWrapper, SelectButton };
