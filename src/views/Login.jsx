import { useState } from "react";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [validPass, setValidPass] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const classInputPass = `form-control ${validPass ? "" : "is-invalid"}`;
  const classInputEmail = `form-control ${validEmail ? "" : "is-invalid"}`;

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
      return window.alert("Email y password obligatorias.");
    }

    if (!emailRegex.test(user.email)) {
      setValidEmail(false);
      return window.alert("El formato del email no es correcto!");
    }
  };
  return (
    <main className="container  d-flex justify-content-center align-items-center p-5">
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
            onChange={handleUser}
            className={classInputEmail}
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <div>
          <label className="form-lebel">Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleUser}
            className={classInputPass}
            placeholder="Ingresa tu contraseña"
          />
          <a href="">¿Olvidaste tu contraseña?</a>
        </div>
        <button type="submit" className="btn btn-secondary">
          Ingresar
        </button>
        <p>
          O <a href="/register">Registrate</a>
        </p>
      </form>
    </main>
  );
}

export default Login;
