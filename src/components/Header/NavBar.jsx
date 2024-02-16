import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white d-none d-xl-block">
      <div className="container">
        <p className="navbar-brand d-none d-xl-block">
          <Link className="nav-link" to="/">
            <img src="../../../public/logo-02.png" alt="..." width="75%" />
          </Link>
        </p>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/products/FrutosSecos">
                {" "}
                Frutos Secos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products/BarradeProteinas">
                Barras de Proteinas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products/Cacao">
                Cacao y chocolates
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products/Infusiones">
                Infusiones
              </Link>
            </li>
          </ul>
          <span className="px-4 fs-1">
            {" "}
            <Link className="nav-link" to="/cart">
              🛒
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
