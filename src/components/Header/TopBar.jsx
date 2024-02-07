import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className='d-flex'>
      <a className="navbar-brand d-block d-xl-none">
      <img src="../../../public/logo-02.png" alt="..." width="75%" />
    </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topbar" aria-controls="topbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse justify-content-center" id="topbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Registrarse</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
