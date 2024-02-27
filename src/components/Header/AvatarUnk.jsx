import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function AvatarUnk() {
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>

              {/* <img src="#" width="35" height="35" className="img-fluid rounded-circle" alt="profile" /> */}
            </a>
            <ul className="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
              <li>
                <h6 className="dropdown-header fs-7 text-center">
                  Bienvenido, <strong>Desconocido</strong>
                </h6>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/register">
                  <span>
                    <i className="bi  bi bi-person-add me-2"></i>
                    <span className="fs-7">Regístrate</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/login">
                  <span>
                    <i className="bi bi-person-check-fill me-2"></i>
                    <span className="fs-7">ingresar</span>
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AvatarUnk;
