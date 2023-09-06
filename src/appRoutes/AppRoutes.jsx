import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { defaultUser } from "../pages/user";
import { LoginPage } from "../pages/LoginPage";
import Board from "../components/Board";
import { Header } from "../components/Header";

export const AppRoutes = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = () => {
    if (email === defaultUser.email && password === defaultUser.password) {
      setUser(defaultUser);
      localStorage.setItem("user", JSON.stringify(defaultUser));
    } else {
      setError("Неправильный email или пароль!");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/todos" />
            ) : (
              <LoginPage
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                onLogin={handleLogin}
                error={error}
              />
            )
          }
        />
        <Route
          path="/todos"
          element={
            user ? (
              <div>
                <Header onLogout={handleLogout} />
                <Board />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
};
