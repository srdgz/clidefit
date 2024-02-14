import { Link } from "react-router-dom";

import ClidefitLogoCompletoRB from "../assets/ClidefitLogoCompletoRB.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-teal-500 lg:justify-items-center">
        <nav>
          <header className="footer-title text-white opacity-100 md:text-lg">
            Servicios
          </header>
          <a className="link link-hover text-white">Fisioterapia</a>
          <a className="link link-hover text-white">Psicología</a>
          <a className="link link-hover text-white">Nutrición</a>
          <a className="link link-hover text-white">Pilates</a>
        </nav>
        <nav>
          <header className="footer-title text-white opacity-100 md:text-lg">
            Clidefit
          </header>
          <a className="link link-hover text-white">Sobre nosotros</a>
          <a className="link link-hover text-white">Contacto</a>
        </nav>
        <nav>
          <header className="footer-title text-white opacity-100 md:text-lg">
            Legal
          </header>
          <Link to="/politica-cookies" className="link link-hover text-white">
            Política de cookies
          </Link>
          <Link to="/aviso-legal" className="link link-hover text-white">
            Aviso legal
          </Link>
          <Link to="/privacidad" className="link link-hover text-white">
            Privacidad
          </Link>
        </nav>
      </footer>
      <footer className="footer px-5 md:px-10 py-4 border-t bg-teal-500 text-base-content border-blue-900 flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-12 w-auto lg:ms-10"
            src={ClidefitLogoCompletoRB}
            alt="Logo"
          />
          <p className="text-white font-semibold">
            © 2023 | CLIDEFIT <br />
            Tu clínica de fisioterapia y salud
          </p>
        </div>
        <nav className="px-5 md:px-10">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.instagram.com/clidefit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2xl hover:text-indigo-900 text-white"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555394145658"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook fa-2xl text-white hover:text-indigo-900"></i>
            </a>
            <a
              href="https://www.tiktok.com/@clidefit?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-tiktok fa-2xl text-white hover:text-indigo-900"></i>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
