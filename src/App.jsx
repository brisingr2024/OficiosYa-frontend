import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />

    </div>
  );
}

export default App;