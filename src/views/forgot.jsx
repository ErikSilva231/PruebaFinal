import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/profile.css";

function Forgot() {
  

  return (







    <section className="bg-light py-3 py-md-5">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h3 className="fs-1 text-secondary mb-2 text-uppercase text-center">Restablece tu contraseña</h3>
          <h2 className="display-5 mb-4 mb-md-5 text-center">¿Olvidaste tu contraseña?<br/>Ingresa tu email para restablecerla</h2>
          <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>
    </div>

  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-xl-center">
      <div className="col-12 col-lg-6">
        <img className="img-fluid rounded" loading="lazy" src="../../public/Mixes.webp" alt="" />
      </div>
      <div className="col-12 col-lg-6">
        <div className="row justify-content-xl-center">
          <div className="col-12 col-xl-11">
            <div className="bg-white border rounded shadow-sm overflow-hidden">
            <form
        onSubmit="!#"
        className="row gy-4 gy-xl-5 p-4 p-xl-5"
      >
        <div className="mt-4">
          <label className="form-lebel">Correo Electrónico</label>
          <input
            type="email"
            name="email"
              className="form-control mt-2"
            placeholder="Ingresa tu correo electrónico"
          />
         
        </div>

        <button type="submit" className="btn btn-secondary">
          Ingresar
        </button>
        <p  className="text-end mt-2">
          O <a href="/register">Registrate</a>
        </p>
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

export default Forgot;
