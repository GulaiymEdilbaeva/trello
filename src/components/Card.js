import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  deleteCard,
  editCardText,
  openModal,
} from "../reducers/todoSlice";
import Modal from "../modal/Modal";
import { useQueryParams } from "../hook/useQueryParams";
import { useLocation, useNavigate } from "react-router";
import { styled } from "styled-components";

const Card = ({ listIndex, cardIndex }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // wepe
  const navigate = useNavigate();
  const location = useLocation();
  const { getTitle, setTitle } = useQueryParams();
  const isModalOpen = useSelector((state) => state.board.isModalOpen);
  const selectedCard = useSelector((state) => state.board.selectedCard);
  const lists = useSelector((state) => state.board.lists);
  const dispatch = useDispatch();

  const handleEditCardText = () => {
    if (newText.trim() !== "") {
      dispatch(editCardText({ listIndex, cardIndex, newText }));
      setIsEditing(false);
    }
  };
  const handleDeleteCard = () => {
    dispatch(deleteCard({ listIndex, cardIndex }));
  };
  // ...//
  const handleCardClick = () => {
    const title = lists[listIndex].cards[cardIndex];
    localStorage.setItem("selectedCard", JSON.stringify(cardIndex));
    dispatch(openModal({ title, listName: lists[listIndex].title }));
    navigate(`?title=${title}`);
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    //
    navigate(location.pathname);
  };

  useEffect(() => {
    //
    if (isModalOpen && selectedCard) {
      handleCloseModal();
    }
  }, []);
  return (
    <div>
      {isEditing ? (
        <div>
          <input
            style={{ height: "30px" }}
            type="text"
            placeholder="Изменить текст карточки"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <StyledButton onClick={handleEditCardText}>Сохранить</StyledButton>
        </div>
      ) : (
        <>
          <h4 style={{ marginBottom: "-2.1rem" }} onClick={handleCardClick}>
            {lists[listIndex].cards[cardIndex]}
          </h4>
          <MainContainer>
            <StyledButton onClick={() => setIsEditing(true)}>edit</StyledButton>
            <button
              style={{ border: "none", background: "none" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ...
            </button>
          </MainContainer>
        </>
      )}
      {isMenuOpen && (
        <ListMenu>
          <div onClick={handleDeleteCard}>Архировать</div>
          <div>Открыть карточку </div>
          <div>Изменить участников</div>
          <div>Сменить обложку</div>
          <div>Переместить</div>
        </ListMenu>
      )}
      {isModalOpen && selectedCard && (
        <Modal
          title={selectedCard.title}
          listName={selectedCard.listName}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Card;

const MainContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  margin-right: 1rem;
  width: 27%;
  padding: 7px;
  font-size: 0.8rem;
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
