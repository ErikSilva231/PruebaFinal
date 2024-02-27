import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import UserDataContext from "../context/UserContext";
import { FormProfileEdit } from "../components/Form/FormProfileEdit";
import { FormProfile } from "../components/Form/FormProfile";

function ViewProfile() {
  const { userData } = useContext(UserDataContext);

  return (
    <section className="bg-light py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center">Perfil</h2>
            <p className=" text-center lead fs-4 mb-5">{`¡Hola ${userData.name}! Bienvenido a tu perfil personal. Aquí puedes ver tu información, actualizar tu estado, y gestionar tus preferencias. Explora y mantente al tanto de tus actividades y conexiones. ¡Disfruta de tu experiencia personalizada!`}</p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 gy-lg-0">
          <div className="col-12 col-lg-4 col-xl-3">
            <div className="row gy-4">
              <div className="col-12">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-header bg-primary">
                    Bienvenido, <strong> {userData.name}</strong>
                  </div>
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <img
                        src="profile.jpg"
                        className="img-fluid rounded-circle"
                        alt="img de perfil"
                      />
                    </div>
                    <h5 className="text-center mb-1">{userData.name}</h5>
                    <p className="text-center text-secondary mb-4">
                      {userData.rol}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 col-xl-9">
            <div className="card widget-card border-light shadow-sm">
              <div className="card-body p-4">
                <ul className="nav nav-tabs" id="profileTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="true"
                    >
                      <span className="text-primary">Perfil</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="edit-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#edit-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="edit-tab-pane"
                      aria-selected="false"
                    >
                      <span className="text-primary">Editar</span>
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="address-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#address-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="address-tab-pane"
                      aria-selected="false"
                    >
                      <span className="text-primary">Direcciones</span>
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="password-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#password-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="password-tab-pane"
                      aria-selected="false"
                    >
                      <span className="text-primary">Password</span>
                    </button>
                  </li>
                </ul>
                <div className="tab-content pt-4" id="profileTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex="0"
                  >
                    <FormProfile />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="edit-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex="0"
                  >
                    <FormProfileEdit />
                  </div>

                  <div
                    className="tab-pane fade"
                    id="address-tab-pane"
                    role="tabpanel"
                    aria-labelledby="address-tab"
                    tabIndex="0"
                  >
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
                  </div>

                  <div
                    className="tab-pane fade"
                    id="password-tab-pane"
                    role="tabpanel"
                    aria-labelledby="password-tab"
                    tabIndex="0"
                  >
                    <form action="#!">
                      <div className="row gy-3 gy-xxl-4">
                        <div className="col-12">
                          <label
                            htmlFor="currentPassword"
                            className="form-label"
                          >
                            Password reciente
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="currentPassword"
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="newPassword" className="form-label">
                            Nuevo Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="newPassword"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="confirmPassword"
                            className="form-label"
                          >
                            Confirmar Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Cambiar Password
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewProfile;
