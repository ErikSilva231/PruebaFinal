import { useContext, useState } from "react";
import { ToastError } from "../components/Form/Toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { URLBASE } from "../config/const";

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

  const { setToken } = useContext(UserDataContext);

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
        console.log(data);
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
    try {
      console.log(URLBASE);
      const response = await axios.post(URLBASE + "/login", user);
      return await response.data;
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
    }
  };
  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h3 className="fs-1 text-secondary mb-2 text-uppercase text-center">
              Inicia sesión
            </h3>
            <h2 className="display-5 mb-4 mb-md-5 text-center">
              Inicia sesión para hacer tu proceso de compra mas rápido
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
                    <div className="mt-4">
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
                    </div>
                    <a className="text-end mt-2" href="-/Forgot">
                      ¿Olvidaste tu contraseña?
                    </a>

                    <button type="submit" className="btn btn-secondary">
                      Ingresar
                    </button>
                    <p className="text-end mt-2">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
