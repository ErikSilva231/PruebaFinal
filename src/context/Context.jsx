import { createContext, useState, useEffect } from "react";

export const Context = createContext({});

// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [ide, setIde] = useState("");
  const [total, setTotal] = useState(0);
  const [producto, setProducto] = useState({
    id: "",
    nombre: "",
    img: "",
    descripcion: "",
    precio: 0,
    categoria: "",
  });

  const getProductos = async () => {
    const response = await fetch("src/assets/json/productos.json");
    const data = await response.json();
    console.log(data);
    setProductos(data);
  };

  useEffect(() => {
    getProductos();
  }, []);

  const globalState = {
    productos,
    producto,
    setProducto,
    carrito,
    setCarrito,
    total,
    setTotal,
    ide,
    setIde,
  };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
