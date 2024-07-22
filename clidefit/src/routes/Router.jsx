import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Servicios from "../pages/Servicios.jsx";
import Fisioterapia from "../pages/Fisioterapia.jsx";
import Psicologia from "../pages/Psicologia.jsx";
import Nutricion from "../pages/Nutrición.jsx";
import Podologia from "../pages/Podologia.jsx";
import Pilates from "../pages/Pilates.jsx";
import Equipo from "../pages/Equipo.jsx";
import Interes from "../pages/Interes.jsx";
import Contacto from "../pages/Contacto.jsx";
import Cookies from "../pages/Cookies.jsx";
import Aviso from "../pages/Aviso.jsx";
import Privacidad from "../pages/Privacidad.jsx";
import Error from "../pages/Error.jsx";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Router = () => {
  return (
    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/fisioterapia" element={<Fisioterapia />} />
        <Route path="/psicologia" element={<Psicologia />} />
        <Route path="/nutricion" element={<Nutricion />} />
        <Route path="/podologia" element={<Podologia />} />
        <Route path="/pilates" element={<Pilates />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/interes" element={<Interes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/politica-cookies" element={<Cookies />} />
        <Route path="/aviso-legal" element={<Aviso />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
