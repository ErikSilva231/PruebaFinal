import { useContext } from "react";
import UserDataContext from "../../context/UserContext";

export const FormProfile = () => {
  const { userData } = useContext(UserDataContext);
  return (
    <>
      <h5 className="mb-3">Perfil</h5>
      <div className="row g-0">
        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
          <div className="p-2">Nombre</div>
        </div>
        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
          <div className="p-2">{userData.name}</div>
        </div>

        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
          <div className="p-2">Dirección</div>
        </div>
        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
          <div className="p-2">av siempre viva #123</div>
        </div>
        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
          <div className="p-2">Teléfono</div>
        </div>
        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
          <div className="p-2">{userData.phone}</div>
        </div>
        <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
          <div className="p-2">Email</div>
        </div>
        <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
          <div className="p-2">{userData.email}</div>
        </div>
      </div>
    </>
  );
};
