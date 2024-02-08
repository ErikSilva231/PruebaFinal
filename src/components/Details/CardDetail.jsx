import "../../assets/css/CardDetail.css";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

export const CardDetail = ({ id, img, nombre, descripcion, precio }) => {
  return (
    <>
      <div class="wrapper">
        <div class="outer">
          <div class="content animated fadeInLeft">
            <span class="bg animated fadeInDown">EXCLUSIVE</span>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <div class="button">
              <a href="#">{precio}</a>
              <a class="cart-btn" href="#">
                <i class="cart-icon ion-bag"></i>Agregar al carrito
              </a>
            </div>
          </div>
          <img src={img} class="animated fadeInRight" />
        </div>
      </div>
    </>
  );
};
