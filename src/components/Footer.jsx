import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="text-light section-dark">
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-md-6">
            <img 
              src="/images/logo-white.webp" 
              className="w-170px mb-2" 
              alt="LogiXpress Logo" 
            />
            
            <div className="spacer-single"></div>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div className="widget">
                  <h5>Services</h5>
                  <ul>
                    <li><Link to="/servicios">Trucking</Link></li>
                    <li><Link to="/servicios">Air Freight</Link></li>
                    <li><Link to="/servicios">Ship Freight</Link></li>
                    <li><Link to="/servicios">Rail Freight</Link></li>
                    <li><Link to="/servicios">Warehousing</Link></li>
                    <li><Link to="/servicios">Customs Brokerage</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="widget">
                  <h5>Company</h5>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contacto">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="social-icons mb-sm-30 text-center">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-between">
              <h2>Get in Touch</h2>
              <img 
                src="/images/ui/up-right-arrow.webp" 
                className="w-60px op-5" 
                alt="Arrow" 
              />
            </div>

            <div className="widget">
              <div className="op-5 fs-15">Email</div>
              <h3>contact@logixpress.com</h3>

              <div className="spacer-20"></div>

              <div className="op-5 fs-15">Phone</div>
              <h3>+929 333 9296</h3>

              <div className="spacer-20"></div>

              <div className="op-5 fs-15">Office Location</div>
              <h3>100 S Main St, New York, NY</h3>

              <div className="spacer-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              Copyright {new Date().getFullYear()} LogiXpress by Designesia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};