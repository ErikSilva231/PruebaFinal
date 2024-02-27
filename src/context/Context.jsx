import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
const { VITE_APP_URL } = import.meta.env;
import UserDataContext from "../context/UserContext";

const Context = createContext({});
const url = VITE_APP_URL;

// eslint-disable-next-line react/prop-types
export function Provider({ children }) {
  const { userData } = useContext(UserDataContext);
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [ide, setIde] = useState("");
  const [total, setTotal] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  const agregarProductoCarrito = async (producto) => {
    getCarrito(userData.id);
    const productoExistente = carrito.find(
      (item) =>
        item.producto_id === producto.id && item.opcion === selectedOption
    );

    if (productoExistente) {
      aumentarItem(productoExistente);
    } else {
      await axios.post(url + "/cart", {
        user_id: userData.id,
        product_id: producto.id,
        cantidad: cantidad,
        opcion: selectedOption,
        precio: precio,
      });
      getCarrito(userData.id);
    }
  };

  const aumentarItem = async (producto) => {
    try {
      await axios.put(url + "/cart", {
        id: producto.product_id,
        opcion: producto.opcion,
        cantidad: producto.cantidad + 1,
        user_id: userData.id,
      });
      getCarrito(userData.id);
    } catch (error) {
      console.log(error);
    }
  };

  const disminuirItem = async (producto) => {
    try {
      await axios.put(url + "/cart", {
        id: producto.product_id,
        opcion: producto.opcion,
        cantidad: Math.max(1, producto.cantidad - 1),
        user_id: userData.id,
      });
      getCarrito(userData.id);
    } catch (error) {
      console.log(error);
    }
  };

  const getCarrito = async (id) => {
    try {
      const response = await axios.get(url + `/cart?userId=${id}`);
      const data = response.data;
      setCarrito(data);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarProductoCarrito = async (id) => {
    try {
      await axios.delete(url + `/cart/${id}`);
      getCarrito(userData.id);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductos = async () => {
    try {
      const response = await axios(url + "/products");
      const data = response.data;
      setProductos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFavoritos = async () => {
    try {
      if (userData) {
        const response = await axios.get(url + "/favorites", {
          params: userData,
        });
        setFavoritos(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const agregarFavoritos = async (producto) => {
    const yaesfavorito = favoritos.find((item) => item.id === producto.id);
    if (userData && !yaesfavorito) {
      await axios.post(url + "/favorites", {
        user_id: userData.id,
        product_id: producto.id,
      });
    }
  };

  const eliminarFavorito = async (id) => {
    try {
      await axios.delete(
        url + `/favorites?user_id=${userData.id}&product_id=${id}`
      );
      getFavoritos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const globalState = {
    productos,
    carrito,
    setCarrito,
    eliminarProductoCarrito,
    total,
    setTotal,
    setPrecio,
    setCantidad,
    getCarrito,
    precio,
    setSelectedOption,
    selectedOption,
    agregarProductoCarrito,
    ide,
    setIde,
    cantidad,
    aumentarItem,
    disminuirItem,
    agregarFavoritos,
    getFavoritos,
    eliminarFavorito,
    favoritos,
    setFavoritos,
  };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
}

export default Context;
