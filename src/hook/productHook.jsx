import axios from "axios";
import { useEffect, useState } from "react";

export const useProduct = (id) => {
  const [producto, setProducto] = useState({
    id: "",
    name: "",
    img_url: "",
    description: "",
    price: 0,
    stock: 0,
    category: "",
  });
  useEffect(() => {
    getProducto(id).then((product) => setProducto(product[0]));
  }, [id]);
  return producto;
};

const getProducto = async (id) => {
  const URLBASE =  import.meta.env.VITE_APP_URL;
  console.log(id);
  try {
    const response = await axios.get(URLBASE + `/products/${id}`);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};
