/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

// eslint-disable-next-line react/prop-types
const CardProduct = ({ producto }) => {
  const navigate = useNavigate();
  const { carrito, setCarrito } = useContext(Context);

  const irAdetalle = (id) => {
    navigate(`/productDetail/${id}`);
  };

  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
    navigate(`/Cart`);
  };

  return (
    <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
      <div className="card">
        <div type="button" onClick={() => irAdetalle(producto.id)}>
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
          onClick={() => agregarProducto(producto)}
        >
          AGREGAR A CARRITO
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
