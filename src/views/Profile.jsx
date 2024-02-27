import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/profile.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserDataContext from "../context/UserContext";

function Profile() {
  const { userData, setToken } = useContext(UserDataContext);
  const navigate = useNavigate();
  const handleClickLogOut = () => {
    window.sessionStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <>
      <header id="header-demo">
        <nav className="navbar navbar-expand-md bg-body-tertiary bsb-navbar-3">
          <div className="container"></div>
        </nav>
      </header>

      <div id="main-demo">
        <h2 className="my-3 my-md-4 container">{`Bienvenido, ${userData.name}`}</h2>
        <section className="my-3 my-md-4">
          <div className="container">
            <div className="row gy-3">
              <div className="col-6 col-md-4 col-xl-2 ">
                <Link
                  to="/viewprofile"
                  className="text-dark text-decoration-none"
                >
                  <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                    <i className=" bi bi-file-person mb-3"></i>
                    <span className="fs-7 text-body-secondary">Ver perfil</span>
                  </h2>
                </Link>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <Link
                  to="/viewprofile"
                  className="text-dark text-decoration-none"
                >
                  <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                    <i className=" bi bi-person-gear mb-3"></i>
                    <span className="fs-7 text-body-secondary">
                      Editar perfil
                    </span>
                  </h2>
                </Link>
              </div>
              <div className="col-6 col-md-4 col-xl-4 ">
                <Link
                  to="/addProduct"
                  className="text-dark text-decoration-none"
                >
                  <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                    <i className=" bi bi-cart-plus mb-3"></i>
                    <span className="fs-7 text-body-secondary text-center">
                      Agregar producto
                    </span>
                  </h2>
                </Link>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <Link
                  to="./viewprofile"
                  className="text-dark text-decoration-none"
                >
                  <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                    <i className=" bi bi-lock mb-3"></i>
                    <span className="fs-7 text-body-secondary">Password</span>
                  </h2>
                </Link>
              </div>
              <button
                className="col-6 col-md-4 col-xl-2 border-0 bg-transparent"
                onClick={handleClickLogOut}
              >
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-box-arrow-left mb-3"></i>
                  <span className="fs-7 text-body-secondary">
                    cerrar sesión
                  </span>
                </h2>
              </button>
            </div>
          </div>
        </section>
      </div>

      <aside
        className="bsb-sidebar-1 offcanvas offcanvas-start"
        tabIndex="-1"
        id="bsbSidebar1"
        aria-labelledby="bsbSidebarLabel1"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="bsbSidebarLabel1"></h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">...</div>
      </aside>
    </>
  );
}

export default Profile;
