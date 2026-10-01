import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Contacto from "../../pages/Contacto";
import Login from "../../pages/Login";
import Error404 from "../../pages/Error404";
import Navbar from "../Navbar";
import Footer from "../Footer";
import About from "../../pages/About";


function Rutas() {
    return (
        <BrowserRouter>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error404 />} />
                <Route path="/about" element={<About />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default Rutas;