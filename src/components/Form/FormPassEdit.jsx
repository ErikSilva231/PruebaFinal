import { useContext, useState } from "react";
import { URLBASE } from "../../config/const";
import axios from "axios";
import UserDataContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { ToastError } from "./Toast";

export const FormPassEdit = () => {
  const { token } = useContext(UserDataContext);
  const Navigate = useNavigate();
  const [password, setPassword] = useState({
    password: "",
    newPassword: "",
    confirmPass: "",
  });
  const [validPassword, setValidPassword] = useState(true);
  const [feedbackPassword, setFeedbackPassword] = useState(true);

  const classInput = {
    password: `form-control ${validPassword ? "" : "is-invalid"}`,
  };

  const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*_?])[a-zA-Z0-9!@#$%^&*_?]{8,}$/;

  const handlePass = (event) => {
    setPassword({ ...password, [event.target.name]: event.target.value });
    console.log({ [event.target.name]: event.target.value });
  };
  const [toastConfig, setToastConfig] = useState({
    title: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const handleForm = (event) => {
    event.preventDefault();
    setValidPassword(true);
    setFeedbackPassword("");
    if (!passRegex.test(password.newPassword)) {
      setValidPassword(false);
      setFeedbackPassword(
        "Contraseña debe tener al menos 8 caracteres y debe contener mayusculas, minusculas y caracteres especiales @#$%^&*_?"
      );
      return;
    }
    if (password.newPassword != password.confirmPass) {
      setValidPassword(false);
      setFeedbackPassword("Contraseñas no coinciden");
      return;
    }
    modifyUser(password);
    Navigate("/");
  };
  const modifyUser = async (user) => {
    try {
      const instanceModify = axios.create({
        baseURL: URLBASE,
        headers: { Authorization: `Bearer ${token}` },
      });
      const response = await instanceModify.put(`/user`, user);
      setToastConfig({
        title: "ok",
        message: "Contraseña modificada",
      });
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <div className="row gy-3 gy-xxl-4">
          <div className="col-12">
            <label htmlFor="currentPassword" className="form-label">
              Password reciente
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handlePass}
            />
          </div>
          <div className="col-12">
            <label htmlFor="newPassword" className="form-label">
              Nuevo Password
            </label>
            <input
              type="password"
              className={classInput.password}
              name="newPassword"
              onChange={handlePass}
            />
            <label className="invalid-feedback">
              {validPassword ? "" : feedbackPassword}
            </label>
          </div>
          <div className="col-12">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar Password
            </label>
            <input
              type="password"
              className={classInput.password}
              name="confirmPass"
              onChange={handlePass}
            />
            <label className="invalid-feedback">
              {validPassword ? "" : feedbackPassword}
            </label>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Cambiar Password
            </button>
          </div>
        </div>
      </form>
      {showToast ? (
        <ToastError
          title={toastConfig.title}
          time={toastConfig.time}
          message={toastConfig.message}
          Close={setShowToast}
        />
      ) : null}
    </>
  );
};
