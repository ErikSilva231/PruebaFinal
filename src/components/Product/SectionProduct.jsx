import { useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

export const SectionProduct = () => {
  const { productos, carrito, setCarrito } = useContext(Context);
  const navigate = useNavigate();

  const irAproductos = (id) => {
    navigate(`/productoDetail/${id}`);
  };

  return (
    <>
      <section></section>
    </>
  );
};
