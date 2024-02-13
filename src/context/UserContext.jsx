/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
//import ENDPOINT from "../config/const.jsx";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
export const UserDataContex = createContext({});

export function UserContexProvider({ children }) {
  const URLBASE = "http://localhost:3000";
  const ENDPOINT = {
    login: `${URLBASE}/login`,
    users: `${URLBASE}/usuarios`,
  };
  const [userData, SetUserData] = useState({
    id: 0,
    nombre: "",
    telefono: "",
    rol: "",
    email: "",
    pedidos: "",
    Favoritos: "",
    direcciones: "",
  });

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [token, SetToken] = useState(
    window.sessionStorage.getItem("token") ?? ""
  );
  const getToken = (userLogin) => {
    console.log(userLogin);
    axios
      .post(ENDPOINT.login, userLogin)
      .then(({ data }) => {
        window.sessionStorage.setItem("token", data.token);
        SetToken(token);
        window.alert("Usuario identificado con éxito 😀.");
        Navigate("/");
      })
      .catch(({ response: { data } }) => {
        console.error(data);
        window.alert(`${data.message} 🙁.`);
      });
  };

  const getUserData = (token) => {
    axios
      .get(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data: [user] }) => SetUserData({ ...user }))
      .catch(({ response: { data } }) => {
        console.error(data);
        window.sessionStorage.removeItem("token");
        SetUserData(null);
        Navigate("/");
      });
  };

  useEffect(() => {
    getUserData(token);
  }, [token]);

  useEffect(() => {
    getToken(userLogin);
  }, [userLogin]);

  return (
    <UserDataContex.Provider
      value={{ userData, getUserData, userLogin, setUserLogin }}
    >
      {children}
    </UserDataContex.Provider>
  );
}
