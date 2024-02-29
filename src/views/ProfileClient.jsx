import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/profile.css";


function ProfileClient() {
  

    return (
      <>
      <header id="header-demo">
        <nav className="navbar navbar-expand-md bg-body-tertiary bsb-navbar-3">
          <div className="container">
           
           
            
          </div>
        </nav>
      </header>
      
      <div id="main-demo">
        <section className="my-3 my-md-4">
          <div className="container">
            <div className="row gy-3">
              <div className="col-6 col-md-4 col-xl-2 ">
              <a href="./viewprofile" className="text-dark text-decoration-none">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-file-person mb-3"></i>
                  <span className="fs-7 text-body-secondary">Ver perfil</span>
                </h2>
                </a>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
              <a href="./viewprofile" className="text-dark text-decoration-none">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-person-gear mb-3"></i>
                  <span className="fs-7 text-body-secondary">Editar perfil</span>
                </h2>
                </a>
              </div>
              <div className="col-6 col-md-4 col-xl-2 ">
                <a href="" className="text-dark text-decoration-none">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-truck mb-3"></i>
                  <span className="fs-7 text-body-secondary text-center">Direcciónes</span>
                </h2>
                </a>
              </div>
              <div className="col-6 col-md-4 col-xl-2 ">
                <a href="./favorites" className="text-dark text-decoration-none">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-heart mb-3"></i>
                  <span className="fs-7 text-body-secondary text-center">Favoritos</span>
                </h2>
                </a>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
              <a href="./viewprofile" className="text-dark text-decoration-none">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-lock mb-3"></i>
                  <span className="fs-7 text-body-secondary">Password</span>
                </h2>
                </a>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-box-arrow-left mb-3"></i>
                  <span className="fs-7 text-body-secondary">cerrar sesión</span>
                </h2>
              </div>
              
            </div>
          </div>
        </section>
      
      </div>
      
      <aside className="bsb-sidebar-1 offcanvas offcanvas-start" tabIndex="-1" id="bsbSidebar1" aria-labelledby="bsbSidebarLabel1">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="bsbSidebarLabel1">Offcanvas Sidebar</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          ...
        </div>
      </aside>
      
    
      </>
    )
  }
  
  export default ProfileClient
  