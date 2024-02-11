import { useState } from "react";

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
  const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleForm = (event) => {
    event.preventDefault();

    setValidName(true);
    setValidSurname(true);
    setValidEmail(true);
    setValidPhone(true);
    setValidPassword(true);

    setFeedbackName(true);
    setFeedbackSurname(true);
    setFeedbackEmail(true);
    setFeedbackPhone(true);
    setFeedbackPassword(true);

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

    if (!passRegex.test(user.phone)) {
      setValidPassword(false);
      setFeedbackPassword(
        "Contraseña debe tener al menos 8 caracteres y debe contener mayusculas, minusculas y caracteres especiales @#$%^&*_"
      );
      return;
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
            {validName ? "" : feedbackName}
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
            {validSurname ? "" : feedbackSurname}
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
            {validEmail ? "" : feedbackEmail}
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
            {validPhone ? "" : feedbackPhone}
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
            {validPassword ? "" : feedbackPassword}
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
            {validPassword ? "" : feedbackPassword}
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
