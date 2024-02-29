export const FormDirecciones = () => {
  return (
    <form action="#!" className="row gy-3 gy-xxl-4">
      <div className="col-12"></div>
      <div className="col-12 col-md-6">
        <label htmlFor="inputFirstName" className="form-label">
          Nombre receptor
        </label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          placeholder="Nombre"
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="inputLastName" className="form-label">
          Apellido receptor
        </label>
        <input
          type="text"
          className="form-control"
          id="inputLastName"
          placeholder="Apellido"
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="inputTeléfono" className="form-label">
          Teléfono
        </label>
        <input
          type="tel"
          className="form-control"
          id="inputTeléfono"
          placeholder="+569 8827 8268"
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="admin@oregano.cl"
        />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="inputregion" className="form-label">
          Región
        </label>
        <input
          type="text"
          className="form-control"
          id="inputregion"
          placeholder="Region"
        />
      </div>

      <div className="col-12 col-md-6">
        <label htmlFor="inputcomuna" className="form-label">
          Comuna
        </label>
        <input
          type="text"
          className="form-control"
          id="inputcomuna"
          placeholder="Comuna"
        />
      </div>

      <div className="col-12 col-md-6">
        <label htmlFor="inputdirección" className="form-label">
          Dirección
        </label>
        <input
          type="text"
          className="form-control"
          id="inputdireccion"
          placeholder="Dirección"
        />
      </div>

      <div className="col-12 col-md-6">
        <label htmlFor="inputdepto" className="form-label">
          depto. / of.
        </label>
        <input
          type="text"
          className="form-control"
          id="inputdepto"
          placeholder="Depto. / Of."
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Guardar cambios
        </button>
      </div>
    </form>
  );
};
