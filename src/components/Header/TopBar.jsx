import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function TopBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="d-flex">
          <p className="navbar-brand d-block d-xl-none">
            <Link className="nav-link" to="/">
              <img src="../../../public/logo-02.png" alt="..." width="75%" />
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


          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#bsbNavbar" aria-controls="bsbNavbar" aria-label="Toggle Navigation">
              <i className="bi  bi bi-three-dots"></i>
            </button>
            <div className="collapse navbar-collapse" id="bsbNavbar">
              <ul className="navbar-nav bsb-dropdown-menu-responsive ms-auto align-items-center">
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../public/profile.jpg" width="35" height="35" className="img-fluid rounded-circle" alt="profile" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
                    <li>
                      <h6 className="dropdown-header fs-7 text-center">bienvenido, <strong>Nombre</strong></h6>
                    </li>
                   
                   
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/profile">
                        <span>
                          <i className="bi  bi bi-person-fill me-2"></i>
                          <span className="fs-7">Ver perfil</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/viewprofile">
                        <span>
                          <i className="bi  bi bi-gear-fill me-2"></i>
                          <span className="fs-7">Editar perfil</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/addProduct">
                        <span>
                          <i className=" bi bi-cart-plus-fill mb-3 me-2"></i>
                          <span className="fs-7">Agregar producto</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/viewprofile">
                        <span>
                          <i className="bi  bi bi-lock-fill me-2"></i>
                          <span className="fs-7">Password</span>
                        </span>
                      </a>
                    </li>
                   
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item text-center" href="#">
                        <span>
                          <span className="fs-7">Log Out</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>












          
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
