import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AvatarUnk from "./AvatarUnk";
import AvatarClient from "./AvatarClient";
import AvatarAdmin from "./AvatarAdmin";
import { useContext } from "react";
import UserDataContext from "../../context/UserContext";
function TopBar() {
  const { userData } = useContext(UserDataContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="d-flex">
          <p className="navbar-brand d-block d-xl-none">
            <Link className="nav-link" to="/">
              <img src="logo-02.png" alt="..." width="75%" />
            </Link>{" "}
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topbar"
            aria-controls="topbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="topbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
            <span className="d-block d-xl-none">
              {" "}
              <Link className="nav-link" to="/cart">
                Ver carrito🛒
              </Link>
            </span>
            <button type="button" className="btn btn-primary d-block d-xl-none">
              {" "}
              <Link className="nav-link text-white" to="/addProduct">
                Agregar producto
              </Link>
            </button>
          </ul>
          {userData ? (
            userData.rol == "Administrador" ? (
              <AvatarAdmin />
            ) : (
              <AvatarClient />
            )
          ) : (
            <AvatarUnk />
          )}
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
