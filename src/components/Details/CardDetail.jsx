import "../../assets/css/CardDetail.css";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CardDetail = ({ id }) => {
  const navigate = useNavigate();

  const { productos, producto, setProducto, carrito, setCarrito } =
    useContext(Context);

  const getProducto = (id) => {
    setProducto(productos.find((objeto) => objeto.id == id));
  };

  useEffect(() => {
    getProducto(id);
  });
  return (
    <>
      <div className="wrapper">
        <div className="outer">
          <div className="content animated fadeInLeft">
            <span className="bg animated fadeInDown">EXCLUSIVE</span>
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <div className="button">
              <a href="#">{producto.precio}</a>
              <a className="cart-btn" href="#">
                <i className="cart-icon ion-bag"></i>Agregar al carrito
              </a>
            </div>
          </div>
          <img src={producto.img} className="imagen animated fadeInRight" />
        </div>
      </div>
    </>
  );
};
