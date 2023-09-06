import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import { addList } from "../reducers/todoSlice";
import { styled } from "styled-components";

const Board = () => {
  const [isAddingList, setIsAddingList] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.board.lists);

  const handleAddList = () => {
    if (newListTitle.trim() !== "") {
      dispatch(addList(newListTitle));
      setNewListTitle("");
      setIsAddingList(false);
    }
  };

  return (
    <MainContainer>
      {lists.map((list, index) => (
        <Container key={index}>
          <List listIndex={index} />
        </Container>
      ))}
      {isAddingList ? (
        <Container>
          <AddListWrapper>
            <StyledInput
              type="text"
              placeholder="Введите название списка"
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
            />
            <div>
              <SecodButton onClick={handleAddList}>
                {" "}
                Добавить список
              </SecodButton>
              <button
                style={{
                  border: "none",
                  marginLeft: "1rem",
                  fontSize: "1.2rem",
                }}
                onClick={() => setIsAddingList(false)}
              >
                X
              </button>
            </div>
          </AddListWrapper>
        </Container>
      ) : (
        <StyledButton onClick={() => setIsAddingList(true)}>
          + Добавить список
        </StyledButton>
      )}
    </MainContainer>
  );
};

export default Board;

const MainContainer = styled.div`
  display: flex;
  /* width: 1200px; */
  /* overflow: auto; */
`;

const StyledButton = styled.button`
  margin-top: 3rem;
  height: 60px;
  margin-left: 1rem;
  background-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const AddListWrapper = styled.div`
  animation: fadeIn 0.5s ease;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Container = styled.div`
  width: 272px;
  margin-left: 4rem;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin-top: 2rem;
`;
const StyledInput = styled.input`
  font-size: 0.3;
  margin: 0 auto;
  padding: 0.5rem;
  width: 90%;
  display: block;
  border: 0.2rem solid #75a9d3;
  transition: all 0.3s;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
const SecodButton = styled.button`
  margin-top: 1rem;
  padding: 7px 10px;
  font-size: 1rem;
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
