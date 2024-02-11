import { useContext } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import CardProduct from "./CardProduct";
import "bootstrap/dist/css/bootstrap.min.css";

export const SectionProduct = () => {
  const { productos } = useContext(Context);

  return (
    <>
      <div className="container">
        <div className="row">
          {productos.map((producto) => (
            <CardProduct key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </>
  );
};
