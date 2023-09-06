import React from "react";
import { styled } from "styled-components";

export const Header = ({ onLogout }) => {
  return (
    <>
      <StyledHeader>
        <img
          src="https://banner2.cleanpng.com/20180621/ewt/kisspng-trello-logo-slack-atlassian-trello-5b2bcdc85e4d36.2783338815295973843863.jpg"
          alt="trello"
        />
        <h2 style={{ marginTop: "1rem" }}>Trello</h2>
      </StyledHeader>
      <>
        {" "}
        <span
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "1rem",
            marginTop: "-3rem",
          }}
          onClick={onLogout}
        >
          Выйти
        </span>
      </>
    </>
  );
};

const StyledHeader = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 100%;
  height: 4rem;
  background-color: aliceblue;
`;
const StyledLogout = styled.div`
  /* display: flex;
  justify-content: flex-end;
  margin-top: -2rem; */
`;
