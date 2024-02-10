import "../../assets/css/CardDetail.css";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CardDetail = ({ id }) => {
  const navigate = useNavigate();

  const { productos, producto, setProducto, carrito, setCarrito } =
    useContext(Context);

  const getProducto = (id) => {
    setProducto(productos.find((objeto) => objeto.id == id));
  };

  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
    navigate(`/Cart`);
  };

  useEffect(() => {
    getProducto(id);
  });
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <div className="main-img">
              <img className="img-fluid" src={producto.img} alt="ProductS" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="main-description px-2">
              <div className="category text-bold">
                Category: {producto.categoria}
              </div>
              <div className="product-title text-bold my-3">
                {producto.nombre}
              </div>

              <div className="price-area my-4">
                <p className="new-price text-bold mb-1">{producto.precio}</p>
              </div>

              <div className="buttons d-flex my-5">
                <div className="block">
                  <a href="#" className="shadow btn custom-btn ">
                    Wishlist
                  </a>
                </div>
                <div className="block">
                  <button
                    className="shadow btn custom-btn"
                    onClick={() => agregarProducto(producto)}
                  />
                  Agregar al carrito
                </div>

                <div className="block quantity">
                  <input
                    type="number"
                    className="form-control"
                    id="cart_quantity"
                    value="1"
                    min="1"
                    max="5"
                    placeholder="Enter email"
                    name="cart_quantity"
                  />
                </div>
              </div>
            </div>

            <div className="product-details my-4">
              <p className="details-title text-color mb-1">Product Details</p>
              <p className="description">{producto.descripcion}</p>
            </div>

            <div className="row questions bg-light p-3">
              <div className="col-md-1 icon">
                <i className="fa-brands fa-rocketchat questions-icon"></i>
              </div>
              <div className="col-md-11 text">
                Have a question about our products at E-Store? Feel free to
                contact our representatives via live chat or email.
              </div>
            </div>

            <div className="delivery my-4">
              <p className="font-weight-bold mb-0">
                <span>
                  <i className="fa-solid fa-truck"></i>
                </span>{" "}
                <b>Delivery done in 3 days from date of purchase</b>{" "}
              </p>
              <p className="text-secondary">
                Order now to get this product delivery
              </p>
            </div>
            <div className="delivery-options my-4">
              <p className="font-weight-bold mb-0">
                <span>
                  <i className="fa-solid fa-filter"></i>
                </span>{" "}
                <b>Delivery options</b>{" "}
              </p>
              <p className="text-secondary">View delivery options here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
