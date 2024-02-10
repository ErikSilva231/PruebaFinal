import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { ListGroup, Button } from "react-bootstrap";
import "../assets/css/carrito.css";

const Cart = () => {
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
      <div className="contenedor">
        <div className="contenedor-lista">
          <div className="contenedor-titulo">
            <h5>Detalles del pedido:</h5>
          </div>
          <ListGroup variant="flush">
            {carrito.map((car, index) => (
              <ListGroup.Item key={index}>
                <div className="contenedor-left">
                  <div className="contenedor-imagen">
                    <img src={car.img} alt="carrito" />
                  </div>
                  <div className="contenedor-nombre">
                    <p>{car.nombre}</p>
                  </div>
                </div>
                <div className="contenedor-right">
                  <div className="contenedor-precio">
                    <p>
                      $
                      {car.precio
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </p>
                  </div>
                  <div className="contenedor-btn">
                    <Button type="button" className="btn-primary">
                      -
                    </Button>
                    <p className="total">1</p>
                    <Button type="button" className="btn-danger">
                      +
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="contenedor-total">
            <h3>
              Total: $ {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
