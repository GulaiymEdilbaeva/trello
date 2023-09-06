import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, deleteList, editListTitle } from "../reducers/todoSlice";
import Card from "./Card";
import { styled } from "styled-components";

const List = ({ listIndex }) => {
  const [newTitle, setNewTitle] = useState("");
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.board.lists);

  const handleEditListTitle = () => {
    if (newTitle.trim() !== "") {
      dispatch(editListTitle({ listIndex, newTitle }));
    }
  };

  const handleAddCard = () => {
    if (newTitle.trim() !== "") {
      dispatch(addCard({ listIndex, text: newTitle }));
      setNewTitle("");
      setIsAddingCard(false);
    }
  };

  const handleDeleteList = () => {
    dispatch(deleteList({ listIndex }));
  };
  return (
    <div>
      <Container>
        <h5
          style={{ width: "90%", borderBottom: "1px solid" }}
          onClick={() => setNewTitle(lists[listIndex].title)}
          onBlur={handleEditListTitle}
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          {lists[listIndex].title}
        </h5>
        <button
          style={{
            border: "none",
            background: "none",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ...
        </button>
      </Container>
      {isMenuOpen && (
        <ListMenu>
          <div onClick={handleDeleteList}>Архивировать</div>
          <div>Копировать список</div>
          <div>Переместить список</div>
          <div>Подписаться</div>
          <div>Сортировать по..</div>
          <div>Создать правило</div>
        </ListMenu>
      )}
      {lists[listIndex].cards.map((card, cardIndex) => (
        <Card key={cardIndex} listIndex={listIndex} cardIndex={cardIndex} />
      ))}
      {isAddingCard ? (
        <div>
          <input
            style={{ height: "40px" }}
            type="text"
            placeholder="Введите текст карточки"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <MainButton onClick={handleAddCard}>Добавить карточку</MainButton>
          <button
            style={{
              border: "none",
              marginLeft: "1rem",
              fontSize: "1rem",
            }}
            onClick={() => setIsAddingCard(false)}
          >
            X
          </button>
        </div>
      ) : (
        <StyledButton onClick={() => setIsAddingCard(true)}>
          + Добавить карточку
        </StyledButton>
      )}
    </div>
  );
};

export default List;

const Container = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  margin-top: 2rem;
  color: black;
  font-size: 16px;
  padding: 7px;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #dcdcdc;
  }
`;
const MainButton = styled.button`
  height: 44px;
  margin-top: 1rem;
  margin-left: 0.1rem;
  padding: 4px;
  font-size: 0.9rem;
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
const ListMenu = styled.div`
  div:hover {
    height: 1.5rem;
    background-color: #c8c8c8;
    cursor: pointer;
    color: #505050;
  }
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
  width: 16%;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin-left: 17rem;
  z-index: 999;
  position: absolute;
`;
