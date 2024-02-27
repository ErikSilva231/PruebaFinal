/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//import ENDPOINT from "../config/const.jsx";
import { createContext, useState } from "react";
import { useUser } from "../hook/userHook";
const UserDataContext = createContext({});

export function UserContextProvider({ children }) {
  const [token, setToken] = useState(
    window.sessionStorage.getItem("token") ?? ""
  );
  const userData = useUser(token);

  return (
    <UserDataContext.Provider value={{ userData, token, setToken }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataContext;
