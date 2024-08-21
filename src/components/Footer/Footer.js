import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-underline"></div>

      <footer className="text-light py-4">
        <div className="container text-center">
          <div className="mb-3">
            <p>
              BRAND<sup>®</sup> and the Mysite logo are registered trademarks of
              mysite AB. used under license by Mysite Inc.
            </p>
          </div>
          <div className="mb-3">
            <p>&copy; 2023 Mysite. All rights reserved.</p>
          </div>
          <div className="d-flex justify-content-center">
            <ul className="list-unstyled d-flex">
              <li className="mx-3">
                <a
                  href="#legal-notice"
                  className="text-dark text-decoration-none"
                >
                  Legal Notice
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#privacy-policy"
                  className="text-dark text-decoration-none"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mx-3">
                <a href="#contact" className="text-dark text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="#cookie-policy"
                  className="text-dark text-decoration-none"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
