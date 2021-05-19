import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { postTransaction } from "../../../redux/operations/mainOperations";
import routers from "../../../routers/routers";
import sprite from "../../../sprites/sprite.svg";
import {
  SuccessContainer,
  CheckShield,
  HomeButtons,
  MessageContainer,
  Message,
} from "./SuccessPageStyles";

const SuccessPage = () => {
  const responseBids = useSelector((state) => state.payMethods.responseBids);
  const history = useHistory();

  const handleToHome = () => {
    history.push(routers.main);
  };

  return responseBids.message ? (
    <SuccessContainer>
      <CheckShield>
        <use href={sprite + "#bx_bxs-check-shield"} />
      </CheckShield>
      <MessageContainer>
        <Message>{`${responseBids.message}!`}</Message>
        <p>
          Your exchange order has been placed successfully and will be processed
          soon.
        </p>
      </MessageContainer>
      <HomeButtons onClick={handleToHome}>Home</HomeButtons>
    </SuccessContainer>
  ) : (
    <Redirect to={routers.mein} />
  );
};

export default SuccessPage;
