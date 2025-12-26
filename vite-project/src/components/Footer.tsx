import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              Ghaddar General Trading & Contracting
            </h3>
            <p className="footer-description">
              Leading the way in asphalt paving and road construction with over
              15 years of excellence.
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/share/1BkVAGLobG/?mibextid=wwXIfr"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/mghaddar3?igsh=MWVwMWJyZTZzbWc2Zw=="
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/+96170444106"
                className="social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services">Asphalt Paving</Link>
              </li>
              <li>
                <Link to="/services">Road Construction</Link>
              </li>
              <li>
                <Link to="/services">Building Roads</Link>
              </li>
              <li>
                <Link to="/services">Maintenance & Repair</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>Al ghazieh,South Lebanon,Lebanon</span>
              </li>
              <li>
                <FaPhone />
                <span>+961 70 444 106</span>
              </li>
              <li>
                <FaEnvelope />
                <span>ghaddargeneraltrading@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Ghaddar General Trading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
