import { useContext, useEffect, useState } from "react";
import UserDataContext from "../../context/UserContext";
import { URLBASE } from "../../config/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const FormProfileEdit = () => {
  const Navigate = useNavigate();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneRegex = /^(?:56)?[1-9]\d{8}$/;
  const { userData, token, setToken } = useContext(UserDataContext);
  const [user, setUser] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
  });
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackPhone, setFeedbackPhone] = useState("");
  const classInput = {
    email: `form-control ${validEmail ? "" : "is-invalid"}`,
    phone: `form-control ${validPhone ? "" : "is-invalid"}`,
  };
  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });
  const handleForm = (event) => {
    event.preventDefault();
    setValidEmail(true);
    setValidPhone(true);
    setFeedbackEmail("");
    setFeedbackPhone("");
    if (!emailRegex.test(user.email)) {
      console.log("malo");
      setValidEmail(false);
      setFeedbackEmail("El formato del email no es correcto");
      return;
    }
    if (!phoneRegex.test(user.phone)) {
      setValidPhone(false);
      setFeedbackPhone("El formato del telefono no es correcto");
      return;
    }
    modifyUser(user);
    setToken(token);
    setUser({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    });
    Navigate("/");
  };
  const modifyUser = async (user) => {
    try {
      const instanceModify = axios.create({
        baseURL: URLBASE,
        headers: { Authorization: `Bearer ${token}` },
      });
      const response = await instanceModify.put(`/user`, user);
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setUser({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    });
  }, [userData]);
  return (
    <form onSubmit={handleForm} className="row gy-3 gy-xxl-4">
      <div className="col-12">
        {/*<div className="row gy-2">
          <label className="col-12 form-label m-0">Imagen de perfil</label>
          <div className="col-12">
            <img
              src="profile.jpg"
              className="img-fluid"
              alt="profile"
              width="20%"
            />
          </div>
           <div className="col-12">
                        <a href="#!" className="d-inline-block bg-primary link-light lh-1 p-2 rounded">
                          <i className="bi bi-upload"></i>
                        </a>
                        <a href="#!" className="d-inline-block bg-danger link-light lh-1 p-2 rounded">
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
        </div> */}
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="inputFirstName" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          value={user.name}
          onChange={handleUser}
        />
      </div>

      <div className="col-12 col-md-6">
        <label htmlFor="inputTeléfono" className="form-label">
          Teléfono
        </label>
        <input
          type="tel"
          name="phone"
          className={classInput.phone}
          placeholder="569 XXXX XXXX"
          value={user.phone}
          onChange={handleUser}
        />
        <label className="invalid-feedback">
          {validPhone ? "" : feedbackPhone}
        </label>
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className={classInput.email}
          placeholder="email@email.com"
          value={user.email}
          onChange={handleUser}
        />
        <label className="invalid-feedback">
          {validEmail ? "" : feedbackEmail}
        </label>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Guardar cambios
        </button>
      </div>
    </form>
  );
};
