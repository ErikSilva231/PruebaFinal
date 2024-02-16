import { useContext, useState } from "react";
import { ToastError } from "../components/Form/Toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContex } from "../context/UserContext";

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

  const { setToken } = useContext(UserDataContex);

  const navigate = useNavigate();
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

    getToken(user)
      .then((data) => {
        if (data.token) {
          window.sessionStorage.setItem("token", data.token);
          setToken(data.token);
          navigate("/");
          setUser({ email: "", password: "" });
        } else {
          setShowToast(true);
          setToastConfig({
            title: data.message,
            message: "Revise información",
          });
        }
      })
      .catch((data) => {
        console.log(data);
        setShowToast(true);
        setToastConfig({
          title: "Error",
          message: "Error inesperado, intente mas tarde",
        });
      });
  };
  const getToken = async (user) => {
    const URLBASE = "http://localhost:3000";
    try {
      const response = await axios.post(URLBASE + "/login", user);
      return await response.data;
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
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
