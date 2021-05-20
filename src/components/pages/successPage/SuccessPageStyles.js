import styled from "styled-components";

const SuccessContainer = styled.div`
  width: 460px;
  height: 371px;
  margin: 0 auto;
  padding: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.08);
`;

const MessageContainer = styled.div`
  width: 312px;
  height: 89px;

  font-family: "Roboto-400";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;

const Message = styled.p`
  font-family: "Roboto-700";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;
`;

const CheckShield = styled.svg`
  fill: #58b4ae;
  width: 83px;
  height: 91px;
`;

const HomeButtons = styled.button`
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
export {
  SuccessContainer,
  MessageContainer,
  Message,
  CheckShield,
  HomeButtons,
};
