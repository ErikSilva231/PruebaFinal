import axios from "axios";
import { useState } from "react";
import { URLBASE } from "../config/const";

function Register() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [validName, setValidName] = useState(true);
  const [validSurname, setValidSurname] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const [feedbackName, setFeedbackName] = useState(true);
  const [feedbackSurname, setFeedbackSurname] = useState(true);
  const [feedbackEmail, setFeedbackEmail] = useState(true);
  const [feedbackPhone, setFeedbackPhone] = useState(true);
  const [feedbackPassword, setFeedbackPassword] = useState(true);

  const classInput = {
    name: `form-control ${validName ? "" : "is-invalid"}`,
    surname: `form-control ${validSurname ? "" : "is-invalid"}`,
    email: `form-control ${validEmail ? "" : "is-invalid"}`,
    phone: `form-control ${validPhone ? "" : "is-invalid"}`,
    password: `form-control ${validPassword ? "" : "is-invalid"}`,
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneRegex = /^(?:(?:\+|00)56)?[1-9]\d{8}$/;
  const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*_?])[a-zA-Z0-9!@#$%^&*_?]{8,}$/;

  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleForm = (event) => {
    event.preventDefault();

    setValidName(true);
    setValidSurname(true);
    setValidEmail(true);
    setValidPhone(true);
    setValidPassword(true);

    setFeedbackName("");
    setFeedbackSurname("");
    setFeedbackEmail("");
    setFeedbackPhone("");
    setFeedbackPassword("");

    if (
      !user.email.trim() ||
      !user.password.trim() ||
      !user.name.trim() ||
      !user.surname.trim() ||
      !user.phone.trim()
    ) {
      setValidName(false);
      setValidSurname(false);
      setValidEmail(false);
      setValidPhone(false);
      setValidPassword(false);

      setFeedbackName("Todos los campos son obligatorias.");
      setFeedbackSurname("Todos los campos son obligatorias.");
      setFeedbackEmail("Todos los campos son obligatorias.");
      setFeedbackPhone("Todos los campos son obligatorias.");
      setFeedbackPassword("Todos los campos son obligatorias.");

      return;
    }

    if (!emailRegex.test(user.email)) {
      setValidEmail(false);
      setFeedbackEmail("El formato del email no es correcto");
      return;
    }

    if (!phoneRegex.test(user.phone)) {
      setValidPhone(false);
      setFeedbackPhone("El formato del telefono no es correcto");
      return;
    }

    if (!passRegex.test(user.password)) {
      setValidPassword(false);
      setFeedbackPassword(
        "Contraseña debe tener al menos 8 caracteres y debe contener mayusculas, minusculas y caracteres especiales @#$%^&*_?"
      );
      return;
    }

    const userRegister = {
      name: user.name + " " + user.surname,
      email: user.email,
      password: user.password,
      phone: user.phone,
      rol: "client",
    };

    createUser(userRegister);
    setUser({
      name: "",
      surname: "",
      email: "",
      phone: "",
      password: "",
    });
  };
  const createUser = async (user) => {
    //const URLBASE = "https://trabajofinalbackend.onrender.com/";
    try {
      const response = await axios.post(URLBASE + `/user`, user);
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h3 className="fs-1 text-secondary mb-2 text-uppercase text-center">
              Regístrate
            </h3>
            <h2 className="display-5 mb-4 mb-md-5 text-center">
              Regístrate para tener una mejor experiencia de compra
            </h2>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-xl-center">
          <div className="col-12 col-lg-6">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src="Mixes.webp"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <div className="bg-white border rounded shadow-sm overflow-hidden">
                  <form
                    onSubmit={handleForm}
                    className="row gy-4 gy-xl-5 p-4 p-xl-5"
                  >
                    <div className="mt-4">
                      <label className="form-lebel">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleUser}
                        className={classInput.name}
                        placeholder="Ingresa tu nombre"
                      />
                      <label className="invalid-feedback">
                        {validName ? "" : feedbackName}
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="form-lebel">Apellidos</label>
                      <input
                        type="text"
                        name="surname"
                        onChange={handleUser}
                        className={classInput.surname}
                        placeholder="Ingresa tus Apellidos"
                      />
                      <label className="invalid-feedback">
                        {validSurname ? "" : feedbackSurname}
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="form-lebel">Correo Electrónico</label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleUser}
                        className={classInput.email}
                        placeholder="Ingresa tu correo electrónico"
                      />
                      <label className="invalid-feedback">
                        {validEmail ? "" : feedbackEmail}
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="form-lebel">Télefono</label>
                      <input
                        type="phone"
                        name="phone"
                        onChange={handleUser}
                        className={classInput.phone}
                        placeholder="Ingresa tu correo electrónico"
                      />
                      <label className="invalid-feedback">
                        {validPhone ? "" : feedbackPhone}
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="form-lebel">Contraseña</label>
                      <input
                        type="password"
                        name="password"
                        onChange={handleUser}
                        className={classInput.password}
                        placeholder="Ingresa tu contraseña"
                      />
                      <label className="invalid-feedback">
                        {validPassword ? "" : feedbackPassword}
                      </label>
                    </div>
                    <div className="mt-4">
                      <label className="form-lebel">
                        Re-ingrese Contraseña
                      </label>
                      <input
                        type="password"
                        name="confirmación"
                        className={classInput.password}
                        placeholder="Re-Ingresa tu contraseña"
                      />
                      <label className="invalid-feedback">
                        {validPassword ? "" : feedbackPassword}
                      </label>
                    </div>
                    <button type="submit" className="btn btn-secondary">
                      Registrar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
