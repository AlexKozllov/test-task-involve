import styled from "styled-components";

const MainPageStyles = styled.div`
  margin: 0 auto;
  width: 754px;
  height: 344px;
  box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.08);

  /* display: flex; */
  /* flex-direction: row; */
`;

const SelectWrapper = styled.div`
  /* margin: 0 auto;
  width: 754px;
  height: 344px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SelectButton = styled.input`
  /* margin: 0 auto;
  width: 754px;
  height: 344px; */
  display: flex;
  flex-direction: row;
`;
export { MainPageStyles, SelectWrapper, SelectButton };
