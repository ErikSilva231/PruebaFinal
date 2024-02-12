/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Context } from "../../context/Context";
import CardProduct from "./CardProduct";
import "bootstrap/dist/css/bootstrap.min.css";

export const SectionProduct = ({ categoria }) => {
  const { productos } = useContext(Context);
  let productosCategoria = productos;

  if (categoria) {
    productosCategoria = productos.filter(
      (producto) => producto.categoria == categoria
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {productosCategoria.map((producto) => (
            <CardProduct key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </>
  );
};
