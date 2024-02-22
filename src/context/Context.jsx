import { createContext, useState, useEffect } from "react";
import axios from "axios";
const {VITE_APP_URL } = import.meta.env; 


export const Context = createContext({});
const url = VITE_APP_URL;


// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [ide, setIde] = useState("");
  const [total, setTotal] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await axios(url + "/products");
      const data = response.data;
      setProductos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await axios.delete(url + `cart/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const getFavoritos = async () => {
    try {
      const response = await axios.get(url + "favorites");
      setFavoritos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarFavoritos = async (producto) => {
    const yaesfavorito = favoritos.find((item) => item.id === producto.id);

    if (!yaesfavorito) {
      await axios.post(url + "favorites", producto);
      getFavoritos();
    }
  };

  const eliminarFavorito = async (id) => {
    try {
      await axios.delete(url + `favorites/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarProducto = (producto) => {
    const productoSeleccionado = {
      producto,
      cantidad: cantidad,
      opcion: selectedOption,
      precio: precio,
      precioTotal: precio * cantidad,
    };

    const productoExistente = carrito.find(
      (item) => item.producto.id === producto.id
    );

    if (productoExistente) {
      aumentarItem(productoExistente);
    } else {
      setCarrito([...carrito, productoSeleccionado]);
    }
  };
  const aumentarItem = (producto) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.producto.id === producto.producto.id
          ? {
              ...item,
              cantidad: item.cantidad + 1,
              precioTotal: (item.cantidad + 1) * item.precio,
            }
          : item
      )
    );
  };

  const disminuirItem = (producto) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.producto.id == producto.producto.id
          ? {
              ...item,
              cantidad: Math.max(0, item.cantidad - 1),
              precioTotal: (item.cantidad - 1) * item.precio,
            }
          : item
      )
    );
  };

  useEffect(() => {
    getProductos();
  }, []);

  const globalState = {
    productos,
    carrito,
    setCarrito,
    eliminarProducto,
    total,
    setTotal,
    setPrecio,
    setCantidad,
    precio,
    setSelectedOption,
    selectedOption,
    agregarProducto,
    ide,
    setIde,
    aumentarItem,
    disminuirItem,
    agregarFavoritos,
    eliminarFavorito,
    favoritos,
    setFavoritos,
  };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
