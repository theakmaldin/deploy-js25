import React, { createContext, useEffect, useState } from "react";
import fire from "../fire";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  // очищение ошибок
  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  // очищение инпутов
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  // Функция для регистрации
  const handleSignUp = () => {
    console.log(email);
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setEmailError(error.message);
            break;
          case "auth/invalid-email":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
          default:
            setEmailError(error.message);
            setPasswordError(error.message);
        }
      });
  };

  // Функция для логина
  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-not-found":
          case "auth/user-disabled":
            setEmailError(error.message);
            break;
          default:
            setEmailError(error.message);
            setPasswordError(error.message);
        }
      });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        clearInputs();
        setUser(currentUser);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const authCloud = {
    email,
    user,
    password,
    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    handleLogin,
    handleLogOut,
    handleSignUp,
  };

  return (
    <authContext.Provider value={authCloud}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
