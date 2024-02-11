import { useState } from "react";

function Register() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [valid, setValid] = useState({
    name: true,
    surname: true,
    email: true,
    phone: true,
    password: true,
  });
  const [feedback, setFeedback] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
  });

  const classInput = {
    name: `form-control ${valid.name ? "" : "is-invalid"}`,
    surname: `form-control ${valid.surname ? "" : "is-invalid"}`,
    email: `form-control ${valid.email ? "" : "is-invalid"}`,
    phone: `form-control ${valid.phone ? "" : "is-invalid"}`,
    password: `form-control ${valid.password ? "" : "is-invalid"}`,
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneRegex = /^(?:(?:\+|00)56)?[1-9]\d{8}$/;
  const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleForm = (event) => {
    event.preventDefault();
    if (
      !user.email.trim() ||
      !user.password.trim() ||
      !user.name.trim() ||
      !user.surname.trim() ||
      !user.phone.trim()
    ) {
      setValid({
        name: false,
        surname: false,
        email: false,
        phone: false,
        password: false,
      });
      setFeedback({
        name: "Todos los campos son obligatorias.",
        surname: "Todos los campos son obligatorias.",
        email: "Todos los campos son obligatorias.",
        phone: "Todos los campos son obligatorias.",
        password: "Todos los campos son obligatorias.",
      });
      return;
    }

    if (!emailRegex.test(user.email)) {
      return window.alert("El formato del email no es correcto!");
    }

    if (!phoneRegex.test(user.phone)) {
      return window.alert("El formato del telefono no es correcto!");
    }
    //Logica para llamar a la api para registrarse
  };
  return (
    <main className="container  d-flex justify-content-center align-items-center p-5">
      <form
        onSubmit={handleForm}
        className="bg-white p-5 w-50 d-flex flex-column gap-3"
      >
        <p className="fs-2">
          !Bienvenido! Ingresa tus datos y disfruta una experiencia de compra
        </p>
        <div>
          <label className="form-lebel">Nombre</label>
          <input
            type="text"
            name="name"
            onChange={handleUser}
            className={classInput.name}
            placeholder="Ingresa tu nombre"
          />
          <label className="invalid-feedback">
            {valid.name ? "" : feedback.name}
          </label>
        </div>
        <div>
          <label className="form-lebel">Apellidos</label>
          <input
            type="text"
            name="surname"
            onChange={handleUser}
            className={classInput.surname}
            placeholder="Ingresa tus Apellidos"
          />
          <label className="invalid-feedback">
            {valid.surname ? "" : feedback.surname}
          </label>
        </div>
        <div>
          <label className="form-lebel">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            onChange={handleUser}
            className={classInput.email}
            placeholder="Ingresa tu correo electrónico"
          />
          <label className="invalid-feedback">
            {valid.email ? "" : feedback.email}
          </label>
        </div>
        <div>
          <label className="form-lebel">Télefono</label>
          <input
            type="phone"
            name="phone"
            onChange={handleUser}
            className={classInput.phone}
            placeholder="Ingresa tu correo electrónico"
          />
          <label className="invalid-feedback">
            {valid.phone ? "" : feedback.phone}
          </label>
        </div>
        <div>
          <label className="form-lebel">Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleUser}
            className={classInput.password}
            placeholder="Ingresa tu contraseña"
          />
          <label className="invalid-feedback">
            {valid.password ? "" : feedback.password}
          </label>
        </div>
        <div>
          <label className="form-lebel">Re-ingrese Contraseña</label>
          <input
            type="password"
            name="confirmación"
            className={classInput.password}
            placeholder="Re-Ingresa tu contraseña"
          />
          <label className="invalid-feedback">
            {valid.password ? "" : feedback.password}
          </label>
        </div>
        <button type="submit" className="btn btn-secondary">
          Registrar
        </button>
      </form>
    </main>
  );
}

export default Register;
