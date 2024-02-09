import { useContext } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import CardProduct from "./CardProduct";
import 'bootstrap/dist/css/bootstrap.min.css';


export const SectionProduct = () => {
  const { productos, carrito, setCarrito } = useContext(Context);

  const navigate = useNavigate();

  const irAproductos = (id) => {
    navigate(`/productoDetail/${id}`);
  };

  return (
    <>
       <div className="container">
      <div className="row">
          {productos.map((producto) => (
            <CardProduct
              key={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              img={producto.url_imagen}
              precio={producto.precio}
            />
          ))}
        </div>
        </div>
    </>
  );
};
