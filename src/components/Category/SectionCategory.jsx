import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SectionCategory() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
          <div className="card">
            <img
              src="../../../public/BARRA_500x200.png"
              className="card-img-top"
              alt="..."
            />
            <h5
              type="button"
              href="#"
              className="position-absolute top-100 start-50 text-center translate-middle bg-secondary z-3 py-2 px-2"
            >
              {" "}
              <Link className="nav-link" to="/products/BarradeProteinas">
                BARRAS DE PROTEINAS
              </Link>
            </h5>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
          <div className="card">
            <img
              src="../../../public/Cacao_500x200.png"
              className="card-img-top"
              alt="..."
            />
            <h5
              type="button"
              href="#"
              className="position-absolute top-100 start-50 text-center translate-middle bg-secondary z-3 py-2 px-4"
            >
              <Link className="nav-link" to="/products/Cacao">
                CACAO
              </Link>
            </h5>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
          <div className="card">
            <img
              src="../../../public/FRUTOS_SECOS_500x200.png"
              className="card-img-top"
              alt="..."
            />
            <h5
              type="button"
              href="#"
              className="position-absolute top-100 start-50 text-center translate-middle bg-secondary z-3 py-2 px-4"
            >
              <Link className="nav-link" to="/products/FrutosSecos">
                FRUTOS SECOS
              </Link>
            </h5>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
          <div className="card">
            <img
              src="../../../public/te_500x200.png"
              className="card-img-top"
              alt="..."
            />
            <h5
              type="button"
              href="#"
              className="position-absolute top-100 start-50 text-center translate-middle bg-secondary z-3 py-2 px-4"
            >
              <Link className="nav-link" to="/products/Infusiones">
                INFUSIONES
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCategory;
