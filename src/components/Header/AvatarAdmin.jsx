import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import UserDataContext from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

function AvatarAdmin() {
  const { userData, setToken } = useContext(UserDataContext);
  const navigate = useNavigate();
  const handleClickLogOut = () => {
    window.sessionStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <>
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#bsbNavbar"
        aria-controls="bsbNavbar"
        aria-label="Toggle Navigation"
      >
        <i className="bi  bi bi-three-dots"></i>
      </button>
      <div className="collapse navbar-collapse" id="bsbNavbar">
        <ul className="navbar-nav bsb-dropdown-menu-responsive ms-auto align-items-center">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="profile.jpg"
                width="35"
                height="35"
                className="img-fluid rounded-circle"
                alt="profile"
              />
            </a>
            <ul className="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
              <li>
                <h6 className="dropdown-header fs-7 text-center">
                  bienvenido, <strong>{userData.name}</strong>
                </h6>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/profile">
                  <span>
                    <i className="bi  bi bi-person-fill me-2"></i>
                    <span className="fs-7">Ver perfil</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/viewprofile">
                  <span>
                    <i className="bi  bi bi-gear-fill me-2"></i>
                    <span className="fs-7">Editar perfil</span>
                  </span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/addProduct">
                  <span>
                    <i className=" bi bi-cart-plus-fill mb-3 me-2"></i>
                    <span className="fs-7">Agregar producto</span>
                  </span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/viewprofile">
                  <span>
                    <i className="bi  bi bi-lock-fill me-2"></i>
                    <span className="fs-7">Password</span>
                  </span>
                </Link>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button
                  className="dropdown-item text-center"
                  onClick={handleClickLogOut}
                >
                  <span>
                    <span className="fs-7">Log Out</span>
                  </span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AvatarAdmin;
