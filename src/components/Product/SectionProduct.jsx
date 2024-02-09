import { useContext } from "react";
import { Context } from "../../context/Context";
import CardProduct from "./CardProduct";
import "../../assets/css/SectionProduct.css";

export const SectionProduct = () => {
  const { productos, carrito, setCarrito } = useContext(Context);

  return (
    <>
      <section>
        <div className="contenedor-cards">
          {productos.map((producto) => (
            <CardProduct
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              img={producto.img}
              precio={producto.precio}
            />
          ))}
        </div>
      </section>
    </>
  );
};
