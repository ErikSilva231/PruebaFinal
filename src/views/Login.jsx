import { useContext, useState } from "react";
import { UserDataContex } from "../context/UserContext";
import { ToastError } from "../components/Form/Toast";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [validPass, setValidPass] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [feedbackPass, setFeedbackPass] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastConfig, setToastConfig] = useState({
    title: "",
    time: "",
    message: "",
  });
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const classInputPass = `form-control ${validPass ? "" : "is-invalid"}`;
  const classInputEmail = `form-control ${validEmail ? "" : "is-invalid"}`;

  const { setUserLogin } = useContext(UserDataContex);
  const handleUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleForm = (event) => {
    event.preventDefault();
    setValidEmail(true);
    setValidPass(true);
    if (!user.email.trim() || !user.password.trim()) {
      setValidEmail(false);
      setValidPass(false);
      setFeedbackPass("Email y password  son obligatorias");
      setFeedbackEmail("Email y password  son obligatorias");
      return;
    }

    if (!emailRegex.test(user.email)) {
      setValidEmail(false);
      setFeedbackEmail("El formato del email no es correcto");
      return;
    }
    try {
      setUserLogin(user);
      setUser({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      setShowToast(true);
      setToastConfig({
        title: "Error",
        time: "1 min",
        message: "No se puede iniciar sesión en este momento intente mas tarde",
      });
    }
  };
  return (
    <main className="container  d-flex justify-content-center align-items-center p-5 ">
      <form
        onSubmit={handleForm}
        className="bg-white p-5 w-50 d-flex flex-column gap-3"
      >
        <p className="fs-2">¡Hola! Inicia sesión para comprar</p>
        <div>
          <label className="form-lebel">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleUser}
            className={classInputEmail}
            placeholder="Ingresa tu correo electrónico"
          />
          <label className="invalid-feedback">
            {validEmail ? "" : feedbackEmail}
          </label>
        </div>
        <div>
          <label className="form-lebel">Contraseña</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleUser}
            className={classInputPass}
            placeholder="Ingresa tu contraseña"
          />
          <label className="invalid-feedback">
            {validPass ? "" : feedbackPass}
          </label>
          <a href="">¿Olvidaste tu contraseña?</a>
        </div>
        <button type="submit" className="btn btn-secondary">
          Ingresar
        </button>
        <p>
          O <a href="/register">Registrate</a>
        </p>
      </form>
      {showToast ? (
        <ToastError
          title={toastConfig.title}
          time={toastConfig.time}
          message={toastConfig.message}
          Close={setShowToast}
        />
      ) : null}
    </main>
  );
}

export default Login;
