import { useState } from "react";
import { InputVariant } from "../components/Form/inputVariant";

function AddProduct() {
  const [cantVariant, setCantVariant] = useState(0);
  const [variants, setVariants] = useState([{}]);
  const handleUser = () => {};
  const handleForm = (event) => {
    event.preventDefault();
  };
  const addVariant = () => {
    setCantVariant(cantVariant + 1);
    setVariants([...variants, {}]);
  };
  return (
    <main className="container  d-flex flex-column justify-content-center align-items-center p-5">
      <p className="fs-2">Añadir Nuevo producto</p>
      <form onSubmit={handleForm} className="bg-white p-5 w-100 gap-3">
        <div className="w-100 d-flex gap-3">
          <div className="bg-white p-5 w-50 d-flex flex-column gap-3">
            <p className="fs-4">Descripción</p>
            <div>
              <label className="form-lebel">Nombre del producto</label>
              <input
                type="text"
                name="name"
                onChange={handleUser}
                className={"form-control"}
                placeholder="Ingresa el nombre del producto"
              />
              <label className="invalid-feedback">
                {
                  //validName ? "" : feedbackName
                }
              </label>
            </div>
            <div>
              <label className="form-lebel">Descripcion</label>
              <textarea
                rows={4}
                name="description"
                onChange={handleUser}
                className={"form-control"}
                placeholder="Describe el producto"
              />
              <label className="invalid-feedback">
                {
                  //validName ? "" : feedbackName
                }
              </label>
            </div>
            <div>
              <label className="form-lebel">Catergoria</label>
              <select
                name="category"
                onChange={handleUser}
                className={"form-select"}
              >
                <option selected>Seleccione una categoría</option>
                <option value="CAT001">Frutos Secos</option>
                <option value="CAT002">Barras de Cereal</option>
                <option value="CAT003">Cacao y chocolates</option>
                <option value="CAT004">infusiones</option>
              </select>

              <label className="invalid-feedback">
                {
                  //validName ? "" : feedbackName
                }
              </label>
            </div>
          </div>
          <div className="bg-white p-5 w-50 d-flex flex-column gap-3">
            <p className="fs-4">Detalles</p>
            <div>
              <label className="form-lebel">Imagen del producto</label>
              <input
                type="file"
                name="name"
                onChange={handleUser}
                className={"form-control"}
                placeholder="Ingresa el nombre del producto"
              />
              <label className="invalid-feedback">
                {
                  //validName ? "" : feedbackName
                }
              </label>
            </div>
            <div className="d-flex flex-column gap-1">
              <label className="form-lebel">Variantes</label>
              {variants.map((variant, index) => {
                return <InputVariant key={index} num={index} />;
              })}
              <button className="btn btn-secondary" onClick={addVariant}>
                Añadir variantes
              </button>
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
