import "../../assets/css/CardDetail.css";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

export const CardDetail = ({ id, img, nombre, descripcion, precio }) => {
  return (
    <>
      <div className="wrapper">
        <div className="outer">
          <div className="content animated fadeInLeft">
            <span className="bg animated fadeInDown">EXCLUSIVE</span>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <div className="button">
              <a href="#">{precio}</a>
              <a className="cart-btn" href="#">
                <i className="cart-icon ion-bag"></i>Agregar al carrito
              </a>
            </div>
          </div>
          <img src={img} className="animated fadeInRight" />
        </div>
      </div>
    </>
  );
};
