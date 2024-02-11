/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardProduct = ({ producto }) => {
  const navigate = useNavigate();

  const irAdetalle = (id) => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
      <div className="card">
        <div>
          <img src={producto.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">{producto.nombre}</h5>
            <h5 className="fw-bold">
              <span className="fw-normal fs-6">Desde </span>${producto.precio}
            </h5>
            <p className="card-text fs-6">{producto.descripcion}</p>
          </div>
        </div>

        <p
          type="button"
          href="#"
          className="container-fluid card-text text-center fw-bold bg-secondary py-4 "
          onClick={() => irAdetalle(producto.id)}
        >
          Elegir opciones
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
