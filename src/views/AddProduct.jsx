import { useState } from "react";
import { URLBASE } from "../config/const";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category_id: "",
    img_url: "",
    price: 0,
    stock: 0,
  });
  const [validName, setValidName] = useState(true);
  const [validDescription, setValidDescription] = useState(true);
  const [validCategory, setValidCategory] = useState(true);
  const [validImg, setValidImg] = useState(true);
  const [validPrice, setValidPrice] = useState(true);

  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackDescription, setFeedbackDescription] = useState("");
  const [feedbackCategory, setFeedbackCategory] = useState("");
  const [feedbackImg, setFeedbackImg] = useState("");
  const [feedbackPrice, setFeedbackPrice] = useState("");

  const classInput = {
    name: `form-control ${validName ? "" : "is-invalid"}`,
    description: `form-control ${validDescription ? "" : "is-invalid"}`,
    category: `form-select ${validCategory ? "" : "is-invalid"}`,
    img: `form-control ${validImg ? "" : "is-invalid"}`,
    price: `form-control ${validPrice ? "" : "is-invalid"}`,
  };

  const handleProduct = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleForm = (event) => {
    event.preventDefault();

    setValidName(true);
    setValidDescription(true);
    setValidCategory(true);
    setValidImg(true);

    setFeedbackName("");
    setFeedbackDescription("");
    setFeedbackCategory("");
    setFeedbackImg("");

    if (
      !product.name.trim() ||
      !product.description.trim() ||
      !product.category.trim() ||
      !product.img.trim() ||
      !product.price.trim()
    ) {
      setValidName(false);
      setValidDescription(false);
      setValidCategory(false);
      setValidImg(false);
      setValidPrice(false);

      setFeedbackName("Todos los campos son obligatorias");
      setFeedbackDescription("Todos los campos son obligatorias");
      setFeedbackCategory("Todos los campos son obligatorias");
      setFeedbackImg("Todos los campos son obligatorias");
      setFeedbackPrice("Todos los campos son obligatorias");
      return;
    }
    createProduct(product);
    setProduct({
      name: "",
      description: "",
      category_id: "",
      img_url: "",
      price: 0,
      stock: 0,
    });
  };
  const createProduct = async (product) => {
    try {
      const response = await axios.post(URLBASE + `/user`, product);
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="container  d-flex flex-column justify-content-center align-items-center p-5">
      <p className="fs-2">Añadir Nuevo producto</p>
      <form onSubmit={handleForm} className="bg-white p-5 w-100 gap-3">
        <div className="w-100 d-flex flex-column gap-3 flex-xl-row">
          <div className="bg-white p-5 w-50 d-flex flex-column gap-3">
            <p className="fs-4">Descripción</p>
            <div>
              <label className="form-lebel">Nombre del producto</label>
              <input
                type="text"
                name="name"
                onChange={handleProduct}
                className={classInput.name}
                placeholder="Ingresa el nombre del producto"
              />
              <label className="invalid-feedback">
                {validName ? "" : feedbackName}
              </label>
            </div>
            <div>
              <label className="form-lebel">Descripcion</label>
              <textarea
                rows={4}
                name="description"
                onChange={handleProduct}
                className={classInput.description}
                placeholder="Describe el producto"
              />
              <label className="invalid-feedback">
                {validDescription ? "" : feedbackDescription}
              </label>
            </div>
            <div>
              <label className="form-lebel">Catergoria</label>
              <select
                name="category"
                onChange={handleProduct}
                className={classInput.category}
              >
                <option defaultValue>Seleccione una categoría</option>
                <option value="1">Frutos Secos</option>
                <option value="2">Barras de Cereal</option>
                <option value="3">Cacao</option>
                <option value="4">infusiones</option>
              </select>
              <label className="invalid-feedback">
                {validCategory ? "" : feedbackCategory}
              </label>
            </div>
          </div>
          <div className="bg-white p-5 w-50 d-flex flex-column gap-3">
            <p className="fs-4">Detalles</p>
            <div>
              <label className="form-lebel">Imagen del producto</label>
              <input
                type="text"
                name="img"
                onChange={handleProduct}
                className={classInput.img}
                placeholder="Ingresa link con imagen del producto"
              />
              <label className="invalid-feedback">
                {validImg ? "" : feedbackImg}
              </label>
            </div>
            <div className="d-flex flex-column gap-1">
              <label className="form-lebel">Precio Unitario</label>
              <input
                type="number"
                className={classInput.price}
                onChange={handleProduct}
                min="1"
              />
              <label className="invalid-feedback">
                {validPrice ? "" : feedbackPrice}
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row-reverse">
          <button type="submit" className="btn btn-secondary">
            Agregar
          </button>
        </div>
      </form>
    </main>
  );
}

export default AddProduct;
