import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContex } from "../../context/UserContext";
// import { useUser } from "../../hook/userHook";

export const UserCard = () => {
  const { userData } = useContext(UserDataContex);
  //   const token = window.sessionStorage.getItem("token") ?? "";
  //   const userData = useUser(token);
  const path = userData ? "/profile" : "/login";
  const name = userData ? userData.name : "Inicia Sesión";
  return (
    <Link className="nav-link" to={path}>
      Hola {name}
    </Link>
  );
};
