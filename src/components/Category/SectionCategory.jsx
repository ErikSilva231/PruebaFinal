import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { category } from "../../config/const.js";

function SectionCategory() {
  return (
    <div className="container-fluid">
      <div className="row">
        {category.map((cat) => {
          return (
            <div key={cat.id} className="col-sm-6 col-md-6 col-xl-3 mt-5">
              <div className="card">
                <img
                  src={cat.src}
                  className="card-img-top"
                  alt={`Imagen de ${cat.name}`}
                />
                <h5
                  type="button"
                  href="#"
                  className="position-absolute top-100 start-50 text-center translate-middle bg-secondary z-3 py-2 px-2"
                >
                  {" "}
                  <Link className="nav-link" to={cat.path}>
                    {cat.name}
                  </Link>
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionCategory;
