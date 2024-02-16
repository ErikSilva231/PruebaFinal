/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//import ENDPOINT from "../config/const.jsx";
import { createContext, useState } from "react";
import { useUser } from "../hook/userHook";
export const UserDataContex = createContext({});

export function UserContexProvider({ children }) {
  const [token, setToken] = useState(
    window.sessionStorage.getItem("token") ?? ""
  );
  const userData = useUser(token);

  return (
    <UserDataContex.Provider value={{ userData, token, setToken }}>
      {children}
    </UserDataContex.Provider>
  );
}
