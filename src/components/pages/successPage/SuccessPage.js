import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { responseBids } from "../../../redux/selectors/mainSelector";
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
  const response = useSelector((state) => responseBids(state));
  const history = useHistory();

  const handleToHome = () => {
    history.push(routers.main);
  };

  return (
    <div>
      {response.message ? (
        <SuccessContainer>
          <CheckShield>
            <use href={sprite + "#bx_bxs-check-shield"} />
          </CheckShield>
          <MessageContainer>
            <Message>{`${response.message}!`}</Message>
            <p>
              Your exchange order has been placed successfully and will be
              processed soon.
            </p>
          </MessageContainer>
          <HomeButtons onClick={handleToHome}>Home</HomeButtons>
        </SuccessContainer>
      ) : (
        <Redirect to={routers.main} />
      )}
    </div>
  );
};

export default SuccessPage;
