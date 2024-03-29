import "../../assets/css/CardDetail.css";
import { useContext, useState } from "react";
import { ToastError } from "../Form/Toast";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../hook/productHook";
import UserDataContext from "../../context/UserContext";

// eslint-disable-next-line react/prop-types
export const CardDetail = ({ id }) => {
  const {
    precio,
    setPrecio,
    cantidad,
    setCantidad,
    agregarProductoCarrito,
    setSelectedOption,
    selectedOption,
    agregarFavoritos,
  } = useContext(Context);
  const { userData } = useContext(UserDataContext);
  const producto = useProduct(id);
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleOptionClick = (opcion) => {
    setSelectedOption(opcion);
    switch (opcion) {
      case "100grs":
        return setPrecio(producto.price);
      case "250grs":
        return setPrecio(producto.price * 2);
      case "500grs":
        return setPrecio(producto.price * 3);
      case "1000grs":
        return setPrecio(producto.price * 4);
      default:
        return setPrecio(250);
    }
  };

  const HandleAddFavorite = (producto) => {
    if (userData) {
      agregarFavoritos(producto);
      navigate("/favorites");
    } else {
      setShowToast(true);
    }
  };

  const HandleAddCarrito = (producto) => {
    if (userData) {
      agregarProductoCarrito(producto);
      navigate("/cart");
    } else {
      setShowToast(true);
    }
  };

  const HandleChange = (e) => {
    const targetValue = e.target.value;
    setCantidad(targetValue);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <div className="main-img">
              <img
                className="img-fluid"
                src={producto.img_url}
                alt="Products"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="main-description px-2">
              <div className="category text-bold">
                Categoria: {producto.category}
              </div>
              <div className="product-title text-bold my-3">
                {producto.name}
              </div>
              <div
                className="btn-group"
                role="group"
                aria-label="Seleccionar Cantidad"
              >
                <button
                  type="button"
                  className={`btn btn-outline-primary ${
                    selectedOption === "100grs" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("100grs")}
                >
                  100grs
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-primary ${
                    selectedOption === "250grs" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("250grs")}
                >
                  250grs
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-primary ${
                    selectedOption === "500grs" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("500grs")}
                >
                  500grs
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-primary ${
                    selectedOption === "1000grs" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("1000grs")}
                >
                  1000grs
                </button>
              </div>

              <div className="price-area my-4">
                <p className="new-price text-bold mb-1">
                  $ {precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </p>
              </div>

              <div className="buttons d-flex my-5">
                <div className="block">
                  <a
                    className="shadow btn custom-btn "
                    onClick={() => {
                      HandleAddFavorite(producto);
                    }}
                  >
                    Agregar a favoritos
                  </a>
                </div>
                <div className="block">
                  <a
                    className="shadow btn custom-btn "
                    onClick={() => {
                      HandleAddCarrito(producto);
                    }}
                  >
                    Agregar al carrito
                  </a>
                </div>

                <div className="block quantity">
                  <input
                    type="number"
                    className="form-control"
                    id="cart_quantity"
                    onChange={HandleChange}
                    value={cantidad}
                    min="1"
                    max="5"
                  />
                </div>
              </div>
            </div>

            <div className="product-details my-4">
              <p className="details-title text-color mb-1">
                Detalles del producto
              </p>
              <p className="description">{producto.description}</p>
            </div>
            {showToast ? (
              <ToastError
                title="Mensaje de advertencia"
                time=""
                message="Debe INICIAR SESION para agregar elementos"
                Close={setShowToast}
              />
            ) : null}
            <div className="row questions bg-light p-3">
              <div className="col-md-1 icon">
                <i className="fa-brands fa-rocketchat questions-icon"></i>
              </div>
            </div>
            <div className="delivery my-4">
              <p className="font-weight-bold mb-0">
                <span>
                  <i className="fa-solid fa-truck"></i>
                </span>{" "}
                <b>Entrega dentro de 3 dias desde realizada la compra</b>{" "}
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};
