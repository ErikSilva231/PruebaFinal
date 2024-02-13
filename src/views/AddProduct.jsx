import { useState } from "react";
import { InputVariant } from "../components/Form/inputVariant";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    img: "",
    variants: [{ variant: "", price: 0, stock: 0 }],
  });
  const [cantVariant, setCantVariant] = useState(0);
  const [variants, setVariants] = useState([
    { variant: "", price: 0, stock: 0 },
  ]);

  const [validName, setValidName] = useState(true);
  const [validDescription, setValidDescription] = useState(true);
  const [validCategory, setValidCategory] = useState(true);
  const [validImg, setValidImg] = useState(true);
  const [validVariant, setValidVariant] = useState(true);

  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackDescription, setFeedbackDescription] = useState("");
  const [feedbackCategory, setFeedbackCategory] = useState("");
  const [feedbackImg, setFeedbackImg] = useState("");
  const [feedbackVariant, setFeedbackVariant] = useState("");

  const classInput = {
    name: `form-control ${validName ? "" : "is-invalid"}`,
    description: `form-control ${validDescription ? "" : "is-invalid"}`,
    category: `form-select ${validCategory ? "" : "is-invalid"}`,
    img: `form-control ${validImg ? "" : "is-invalid"}`,
    variant: `form-control ${validVariant ? "" : "is-invalid"}`,
  };

  const handleProduct = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleChangeVariant = (event) => {
    const [key, index] = event.target.name.split("-");
    const arrayVariants = variants;
    arrayVariants[index][key] = event.target.value;
    setVariants(arrayVariants);
    setProduct({ ...product, variants: variants });
    console.log(product);
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
      !product.img.trim()
    ) {
      setValidName(false);
      setValidDescription(false);
      setValidCategory(false);
      setValidImg(false);

      setFeedbackName("Todos los campos son obligatorias");
      setFeedbackDescription("Todos los campos son obligatorias");
      setFeedbackCategory("Todos los campos son obligatorias");
      setFeedbackImg("Todos los campos son obligatorias");
      return;
    }
    variants.map((variant) => {
      if (
        !variant.variant.trim() ||
        !variant.price.trim() ||
        !variant.stock.trim()
      ) {
        setValidVariant(false);
        setFeedbackVariant("Todos los campos son obligatorias");
        return;
      }
    });
  };
  const addVariant = () => {
    setCantVariant(cantVariant + 1);
    setVariants([...variants, { variant: "", price: 0, stock: 0 }]);
  };
  const removeVariant = () => {
    if (!cantVariant == 0) {
      setCantVariant(cantVariant - 1);
      const arrayVariant = variants;
      arrayVariant.pop();
      setVariants(arrayVariant);
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
                <option value="CAT001">Frutos Secos</option>
                <option value="CAT002">Barras de Cereal</option>
                <option value="CAT003">Cacao y chocolates</option>
                <option value="CAT004">infusiones</option>
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
                type="file"
                name="img"
                accept="image/*"
                onChange={handleProduct}
                className={classInput.img}
                placeholder="Ingresa el nombre del producto"
              />
              <label className="invalid-feedback">
                {validImg ? "" : feedbackImg}
              </label>
            </div>
            <div className="d-flex flex-column gap-1">
              <label className="form-lebel">Variantes</label>
              {variants.map((variant, index) => {
                return (
                  <InputVariant
                    key={index}
                    num={index}
                    handleChangeVariant={handleChangeVariant}
                    classVariant={classInput.variant}
                  />
                );
              })}
              <label
                className={
                  validVariant
                    ? "form-label fs-6 fw-light"
                    : "invalid-feedback d-inline"
                }
              >
                {validVariant
                  ? "Agregar Variantes de productos"
                  : feedbackVariant}
              </label>
              <div className="d-flex flex-row-reverse gap-3">
                <button className="btn btn-secondary" onClick={addVariant}>
                  Añadir variantes
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={removeVariant}
                >
                  Eliminar variantes
                </button>
              </div>
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
