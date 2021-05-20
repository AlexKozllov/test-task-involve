import styled from "styled-components";

const Details = styled.div`
  margin: 0 auto;
  padding: 33px;
  padding-bottom: 28px;
  width: 460px;
  height: 319px;
  box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.08);

  & h3 {
    margin-bottom: 36px;
    font-family: "Roboto-700";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
    text-align: left;
  }
`;

const DetailsItem = styled.div`
  margin-top: 21px;
  margin-bottom: 33px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto-400";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-align: right;

  & :first-child {
    color: #818181;
  }
`;

const Buttons = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CancelButtons = styled.button`
  width: 125px;
  height: 48px;
  margin-right: 24px;
  background: #fff;
  border: 1px solid #58b4ae;
  border-radius: 5px;
  color: #000;
  font-family: "Roboto-700";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  transition: all ease-in 150ms;
  :hover {
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
    transform: translate(-3px, -3px);
    transition: all ease-in 150ms;
  }
`;

const ConfirmButtons = styled.button`
  width: 125px;
  height: 48px;
  background: #58b4ae;
  border-style: none;
  border-radius: 5px;
  color: #fff;
  font-family: "Roboto-700";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  transition: all ease-in 150ms;
  :hover {
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
    transform: translate(-3px, -3px);
    transition: all ease-in 150ms;
  }
`;
export { Details, DetailsItem, Buttons, CancelButtons, ConfirmButtons };
