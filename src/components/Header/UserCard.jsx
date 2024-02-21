import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../context/UserContext";

export const UserCard = () => {
  const { userData } = useContext(UserDataContext);
  const path = userData ? "/profile" : "/login";
  const name = userData ? userData.name : "Inicia Sesión";
  return (
    <Link className="nav-link" to={path}>
      Hola {name}
    </Link>
  );
};
