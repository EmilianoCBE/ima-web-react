import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation()

  return (
    <header className="header-static transparent mt-lg-4 pt-lg-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div id="logo">
                  <Link to="/">
                    <img
                      className="logo-main"
                      src="/images/IMA_logo_white.png"
                      style={{ width: '70%' }}
                      alt="IMA Express Logo"
                    />
                    <img
                      className="logo-scroll"
                      src="/images/IMA_logo_white.png"
                      style={{ width: '70%' }}
                      alt="IMA Express Logo"
                    />
                    <img
                      className="logo-mobile"
                      src="/images/IMA_logo_white.png"
                      style={{ width: '70%' }}
                      alt="IMA Express Logo"
                    />
                  </Link>
                </div>
              </div>
              
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <Link className="menu-item" to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link className="menu-item" to="/sectores">Sectores</Link>
                  </li>
                  <li>
                    <a className="menu-item" href="#">Cobertura</a>
                  </li>
                  <li>
                    <a className="menu-item" href="#">Quiénes somos</a>
                    <ul>
                      <li>
                        <Link to="/servicios">Servicios</Link>
                      </li>
                      <li>
                        <Link to="/about">Nuestra historia</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="menu-item" to="/contacto">Contacto</Link>
                  </li>
                </ul>
              </div>
              
              <div className="de-flex-col">
                <div id="btn-extra">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
