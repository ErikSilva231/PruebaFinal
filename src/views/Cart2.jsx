import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";
import "../assets/css/carrito2.css";
import UserDataContext from "../context/UserContext";

const Cart2 = () => {
  const {
    carrito,
    aumentarItem,
    disminuirItem,
    total,
    setTotal,
    getCarrito,
    eliminarProductoCarrito,
  } = useContext(Context);
  const { userData } = useContext(UserDataContext);

  const calcularTotal = () => {
    let parcial = 0;
    carrito.forEach((ele) => {
      parcial = ele.precio * ele.cantidad + parcial;
    });
    setTotal(parcial);
  };

  useEffect(() => {
    if (userData) {
      getCarrito(userData.id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    calcularTotal();
  }, [calcularTotal]);

  return (
    <>
      <div className="container pb-5 mt-n2 mt-md-n3">
        <div className="row">
          <div className="col-xl-9 col-md-8">
            <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-secondary">
              <span>Productos</span>
              <Link className="font-size-sm text-white" to="/products">
                {" "}
                Continuar comprando
              </Link>
            </h2>
            {carrito.map((producto) => (
              <div
                key={producto.id}
                className="d-sm-flex justify-content-between my-4 pb-4 border-bottom"
              >
                <div className="media d-block d-sm-flex text-left text-sm-left">
                  <div className="cart-item-thumb mx-auto mr-sm-4 m-2" href="#">
                    <img src={producto.img} alt="Product" />
                  </div>
                  <div className="media-body pt-3">
                    <h3 className="product-card-title font-weight-semibold border-0 pb-0">
                      <Link
                        className="font-size-sm"
                        to={`/ProductDetail/${producto.product_id}`}
                      >
                        {" "}
                        {producto.name}
                      </Link>
                    </h3>
                    <div className="font-size-sm">
                      <span className="text-muted mr-2">Categoria: </span>
                      {producto.category}
                    </div>
                    <div className="font-size-sm">
                      <button
                        className="btn btn-outline-success btn-sm btn-block mb-2"
                        onClick={() => disminuirItem(producto)}
                      >
                        -
                      </button>
                      <span className="text-muted mr-2"> Cantidad: </span>
                      {producto.cantidad}{" "}
                      <button
                        className="btn btn-outline-success btn-sm btn-block mb-2"
                        onClick={() => aumentarItem(producto)}
                      >
                        +
                      </button>
                    </div>
                    <div className="font-size-sm">
                      <span className="text-muted mr-2">Opción: </span>
                      {producto.opcion}
                    </div>
                    <div className="font-size-lg text-primary pt-2">
                      ${" "}
                      {(producto.precio * producto.cantidad)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </div>
                  </div>
                </div>
                <div className="botones-cart pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left">
                  <div className="form-group mb-2"></div>

                  <button
                    className="btn btn-outline-danger btn-sm btn-block mb-2"
                    type="button"
                    onClick={() => eliminarProductoCarrito(producto.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-xl-3 col-md-4 pt-3 pt-md-0">
            <h2 className="h6 px-4 py-3 bg-secondary text-center">Subtotal</h2>
            <div className="h3 font-weight-semibold text-center py-3">
              $ {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </div>
            <hr />

            <a className="btn btn-primary btn-block" href="#">
              Confirmar Compra
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart2;
