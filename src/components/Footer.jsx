import React from 'react';

function Footer() {
    return ( 
        // <div className="container my-5">
        <footer className="text-white text-center text-lg-start footer-gray">
        <div className="container p-4">
          <div className="row align-items-center mt-4">
            {/* Social Buttons */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center flex-wrap gap-2">
              <button type="button" className="btn btn-floating btn-light btn-lg">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="btn btn-floating btn-light btn-lg">
                <i className="fab fa-dribbble"></i>
              </button>
              <button type="button" className="btn btn-floating btn-light btn-lg">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="btn btn-floating btn-light btn-lg">
                <i className="fab fa-google-plus-g"></i>
              </button>
            </div>
      
            {/* Address Block */}
            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
              <ul className="fa-ul mb-0">
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-home"></i>
                  </span>
                  <span className="ms-2">Warsaw, 00-967, Poland</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="ms-2">contact@example.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="ms-2">+48 234 567 88</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:{" "}
          <a className="text-white" href="#">
            YourCompany
          </a>
        </div>
      </footer>
      
    // </div>
    );
}

export default Footer;