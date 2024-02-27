/* eslint-disable no-empty */
import axios from "axios";
import { useEffect, useState } from "react";

export const useUser = (token) => {
  const [userData, SetUserData] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    rol: "",
    pedidos: "",
    Favoritos: "",
    direcciones: "",
  });
  useEffect(() => {
    getUser(token).then((user) => SetUserData(user));
  }, [token]);
  return userData;
};

const getUser = async (token) => {
  const URLBASE = import.meta.env.VITE_APP_URL;
  try {
    const response = await axios.get(URLBASE + `/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await response.data;
  } catch {}
};
