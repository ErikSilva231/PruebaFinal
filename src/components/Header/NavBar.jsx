import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white d-none d-xl-block">
      <div className="container">
      <a className="navbar-brand d-none d-xl-block">
      <img src="../../../public/logo-02.png" alt="..." width="75%" />
    </a>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/frutos-secos"> Frutos Secos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/barras">Barras de cereales</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cacao">Cacao y chocolates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/infusiones">Infusiones</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default NavBar;
