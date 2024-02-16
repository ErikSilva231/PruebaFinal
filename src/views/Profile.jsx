import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/profile.css";


function Profile() {
  

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
              <div className="col-6 col-md-4 col-xl-4 ">
                <a href="/addProduct" className="text-dark text-decoration-none">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-cart-plus mb-3"></i>
                  <span className="fs-7 text-body-secondary text-center">Agregar producto</span>
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
              {/* <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-bag mb-3"></i>
                  <span className="fs-7 text-body-secondary">Bag</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-balloon mb-3"></i>
                  <span className="fs-7 text-body-secondary">Baloon</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-balloon-heart mb-3"></i>
                  <span className="fs-7 text-body-secondary">Baloon</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-ban mb-3"></i>
                  <span className="fs-7 text-body-secondary">Ban</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-bank mb-3"></i>
                  <span className="fs-7 text-body-secondary">Bank</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-bar-chart mb-3"></i>
                  <span className="fs-7 text-body-secondary">Chart</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-basket mb-3"></i>
                  <span className="fs-7 text-body-secondary">Basket</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-battery mb-3"></i>
                  <span className="fs-7 text-body-secondary">Battery</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-bell mb-3"></i>
                  <span className="fs-7 text-body-secondary">Bell</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-book mb-3"></i>
                  <span className="fs-7 text-body-secondary">Book</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-briefcase mb-3"></i>
                  <span className="fs-7 text-body-secondary">Briefcase</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-brightness-high mb-3"></i>
                  <span className="fs-7 text-body-secondary">Brightness</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-brush mb-3"></i>
                  <span className="fs-7 text-body-secondary">Brush</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-bug mb-3"></i>
                  <span className="fs-7 text-body-secondary">Bug</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-calendar mb-3"></i>
                  <span className="fs-7 text-body-secondary">Calendar</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-camera mb-3"></i>
                  <span className="fs-7 text-body-secondary">Camera</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-camera-video mb-3"></i>
                  <span className="fs-7 text-body-secondary">Video</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-cart-plus mb-3"></i>
                  <span className="fs-7 text-body-secondary">Cart</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-cast mb-3"></i>
                  <span className="fs-7 text-body-secondary">Cast</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-chat mb-3"></i>
                  <span className="fs-7 text-body-secondary">Chat</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-check-lg mb-3"></i>
                  <span className="fs-7 text-body-secondary">Check</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-chevron-double-up mb-3"></i>
                  <span className="fs-7 text-body-secondary">Chevron</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-slash-circle mb-3"></i>
                  <span className="fs-7 text-body-secondary">Slash</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-clipboard mb-3"></i>
                  <span className="fs-7 text-body-secondary">Clipboard</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-clock mb-3"></i>
                  <span className="fs-7 text-body-secondary">Clock</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-cloud mb-3"></i>
                  <span className="fs-7 text-body-secondary">Cloud</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-cloud-fog2 mb-3"></i>
                  <span className="fs-7 text-body-secondary">Cloud</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-code mb-3"></i>
                  <span className="fs-7 text-body-secondary">Code</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-collection mb-3"></i>
                  <span className="fs-7 text-body-secondary">Collection</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-copy mb-3"></i>
                  <span className="fs-7 text-body-secondary">Copy</span>
                </h2>
              </div>
              <div className="col-6 col-md-4 col-xl-2">
                <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-5">
                  <i className=" bi bi-cursor mb-3"></i>
                  <span className="fs-7 text-body-secondary">Cursor</span>
                </h2> 
              </div>*/}
            </div>
          </div>
        </section>
      
      </div>
      
      <aside className="bsb-sidebar-1 offcanvas offcanvas-start" tabindex="-1" id="bsbSidebar1" aria-labelledby="bsbSidebarLabel1">
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
  
  export default Profile
  