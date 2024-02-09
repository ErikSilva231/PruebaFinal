/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/CardProduct.css";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ id, img, nombre, descripcion, precio }) => {
  const navigate = useNavigate();

  const irAdetalle = (id) => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <img
                className="img"
                src={img}
                alt=""
                onClick={() => irAdetalle(id)}
              />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{nombre}</span>
                </div>
                <div className="a-size">
                  <span className="size">{descripcion}</span>
                </div>
              </div>
            </div>
            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>
              <a className="cart" href="#">
                <span className="price">{precio}</span>
                <span className="add-to-cart">
                  <span className="txt">Agregar al carro</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
