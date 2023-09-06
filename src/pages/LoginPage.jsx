import { styled } from "styled-components";

export const LoginPage = ({
  email,
  password,
  setEmail,
  setPassword,
  onLogin,
  error,
}) => {
  return (
    <Container>
      <h3 style={{ color: "white" }}> Вход в Trello</h3>
      <Input
        type="text"
        placeholder="Укажите адрес электронной почты"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton onClick={onLogin}>Войти</StyledButton>
      <p style={{ color: "red" }}>{error}</p>
    </Container>
  );
};
const Container = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;
const Input = styled.input`
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 20%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
`;
const StyledButton = styled.button`
  background-color: #004ea1;
  color: #fff;
  font-size: 16px;
  padding: 15px 20px;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #01244a;
    cursor: pointer;
  }
`;
