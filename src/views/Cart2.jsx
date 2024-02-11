import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import "../assets/css/carrito2.css";

const Cart2 = () => {
  const { carrito, total, setTotal } = useContext(Context);

  const calcularTotal = () => {
    let parcial = 0;
    carrito.forEach((ele) => {
      parcial = ele.precio + parcial;
    });
    setTotal(parcial);
  };
  useEffect(() => {
    calcularTotal();
  });

  return (
    <>
      <div className="container pb-5 mt-n2 mt-md-n3">
        <div className="row">
          <div className="col-xl-9 col-md-8">
            <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-secondary">
              <span>Productos</span>
              <a className="font-size-sm" href="#">
                Continuar comprando
              </a>
            </h2>
            {carrito.map((producto, index) => (
              <div
                key={index}
                className="d-sm-flex justify-content-between my-4 pb-4 border-bottom"
              >
                <div className="media d-block d-sm-flex text-left text-sm-left">
                  <div className="cart-item-thumb mx-auto mr-sm-4 m-2" href="#">
                    <img src={producto.img} alt="Product" />
                  </div>
                  <div className="media-body pt-3">
                    <h3 className="product-card-title font-weight-semibold border-0 pb-0">
                      <a href="#">{producto.nombre}</a>
                    </h3>
                    <div className="font-size-sm">
                      <span className="text-muted mr-2">Categoria:</span>
                      {producto.categoria}
                    </div>
                    <div className="font-size-sm">
                      <span className="text-muted mr-2">Color:</span>Black
                    </div>
                    <div className="font-size-lg text-primary pt-2">
                      ${" "}
                      {producto.precio
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </div>
                  </div>
                </div>
                <div className="botones-cart pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left">
                  <div className="form-group mb-2"></div>
                  <button
                    className="btn btn-outline-secondary btn-sm btn-block mb-2"
                    type="button"
                  >
                    Actualizar Carrito
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm btn-block mb-2"
                    type="button"
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