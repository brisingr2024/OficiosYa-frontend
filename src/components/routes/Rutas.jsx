import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Servicios from "../../pages/Servicios"; 
import Contacto from "../../pages/Contacto";
import Login from "../../pages/Login";
import About from "../../pages/About";
import Error404 from "../../pages/Error404";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Rutas() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error404 />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default Rutas;