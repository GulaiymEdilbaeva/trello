import React, { useEffect } from "react";
import { styled } from "styled-components";

const Modal = ({ title, listName, onClose }) => {
  useEffect(() => {
    window.history.pushState({}, "", `?title=${title}`);
  }, [title]);

  const handleClose = () => {
    window.history.pushState({}, "", window.location.pathname);
    onClose();
  };

  return (
    <Backdrop>
      <StyledContainer>
        <span style={{ fontWeight: "bold", fontSize: "2rem" }}>{title}</span>
        <p>В колонке: {listName}</p>
        <StyledButton onClick={handleClose}>Отмена</StyledButton>
      </StyledContainer>
    </Backdrop>
  );
};

export default Modal;
const StyledContainer = styled.div`
  text-align: center;
  width: 35%;
  height: 15rem;
  z-index: 999;
  top: 34%;
  left: 36%;
  position: fixed;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const Backdrop = styled.div`
  background: rgba(231, 223, 223, 0.25);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 23%;
  padding: 7px;
  font-size: 0.9rem;
  margin: 7rem 7.5rem;

  background-color: #75a9d3;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #a0c5e8;
  }
`;
