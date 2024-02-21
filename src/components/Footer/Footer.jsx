import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            <img src="../../../dist/logo-02.png" class="img-fluid" alt="..." />

            </div>
            <div className="col-md-4 ">
              <h4>Información de contacto</h4>
              <p className="text-white">Dirección: 123 Calle Principal, Ciudad, País</p>
              <p className="text-white">Email: info@example.com</p>
              <p className="text-white">Teléfono: +123456789</p>
            </div>
            <div className="col-md-4">
              <h4>Enlaces útiles</h4>
              <ul className="list-unstyled">
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
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Registrarse
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
                
              </ul>
            </div>
          </div>
        </div>
      </footer>

  )
}

export default Footer;

