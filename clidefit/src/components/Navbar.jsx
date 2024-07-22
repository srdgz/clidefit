import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import ClidefitLogoCompleto1 from "../assets/ClidefitLogoCompleto1.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbarDropdownOpen, setNavbarDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setNavbarDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setIsDropdownOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
    setNavbarDropdownOpen(!navbarDropdownOpen);
  };

  return (
    <nav className="navbar bg-base-100 shadow-md text-blue-900 lg:pt-10 w-full fixed top-0 z-50">
      <section className="hidden lg:flex fixed top-0 left-0 w-full bg-teal-500 px-10 justify-between items-center">
        <div className="ml-4">
          <h3 className="text-white">
            <i className="fa-solid fa-phone"></i> Llama sin compromiso 927 618
            621 ó 623 537 891
          </h3>
        </div>
        <div className="mr-4">
          <a
            href="https://www.instagram.com/clidefit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-lg text-white hover:text-indigo-900 px-4"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61555394145658"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook fa-lg text-white hover:text-indigo-900 pe-4"></i>
          </a>
          <a
            href="https://www.tiktok.com/@clidefit?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok fa-lg text-white hover:text-indigo-900"></i>
          </a>
        </div>
      </section>
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={handleDropdownClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52 ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link to="/">Inicio</Link>
            </li>

            <li>
              <Link to="/servicios">Servicios</Link>
              <ul className="p-2">
                <li>
                  <Link to="/fisioterapia">Fisioterapia Avanzada</Link>
                </li>
                <li>
                  <Link to="/psicologia">Psicología</Link>
                </li>
                <li>
                  <Link to="/nutricion">Nutrición y Dietética</Link>
                </li>
                <li>
                  <Link to="/podologia">Podología</Link>
                </li>
                <li>
                  <Link to="/pilates">Pilates</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/equipo">Equipo</Link>
            </li>
            <li>
              <Link to="/interes">De Interés</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img
            className="h-16 w-auto lg:ms-10"
            src={ClidefitLogoCompleto1}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:text-lg">
          <li>
            <Link
              to="/"
              className="hover:bg-white hover:underline hover:underline-offset-4 hover:text-blue-900"
            >
              Inicio
            </Link>
          </li>
          <div
            className="dropdown dropdown-hover mt-2 px-3"
            onMouseOver={() => setNavbarDropdownOpen(true)}
          >
            <label tabIndex={0}>
              <Link
                to="/servicios"
                className={`hover:bg-white hover:underline hover:underline-offset-4 hover:text-blue-900${
                  navbarDropdownOpen ? "block" : "hidden"
                }`}
                ref={dropdownRef}
                onClick={handleDropdownClick}
              >
                Servicios <i className="fa-solid fa-chevron-down"></i>
              </Link>
            </label>
            <ul
              tabIndex={0}
              className={`dropdown-content z-[1] menu mt-2 p-2 shadow bg-base-100 rounded-box w-64 text-lg ${
                navbarDropdownOpen ? "block" : "hidden"
              }`}
              ref={dropdownRef}
            >
              <li>
                <Link to="/fisioterapia" onClick={closeDropdown}>
                  Fisioterapia Avanzada
                </Link>
              </li>
              <li>
                <Link to="/psicologia" onClick={closeDropdown}>
                  Psicología
                </Link>
              </li>
              <li>
                <Link to="/nutricion" onClick={closeDropdown}>
                  Nutrición y Dietética
                </Link>
              </li>
              <li>
                <Link to="/podologia" onClick={closeDropdown}>
                  Podología
                </Link>
              </li>
              <li>
                <Link to="/pilates" onClick={closeDropdown}>
                  Pilates
                </Link>
              </li>
            </ul>
          </div>
          <li>
            <Link
              to="/equipo"
              className="hover:bg-white hover:underline hover:underline-offset-4 hover:text-blue-900"
            >
              Equipo
            </Link>
          </li>
          <li>
            <Link
              to="/interes"
              className="hover:bg-white hover:underline hover:underline-offset-4 hover:text-blue-900"
            >
              De Interés
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="hover:bg-white hover:underline hover:underline-offset-4 hover:text-blue-900"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:me-10">
        <Link
          to="https://app.clinic-cloud.com/citaonline.php/CLIDEFIT"
          target="_blank"
          className="btn rounded-full shadow-lg bg-blue-900 text-white border-2 border-blue-900 hover:bg-white hover:text-gray-800 hover:border-blue-900"
        >
          CITA PREVIA
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
