import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 

const Navbar = () => {
  // Estado para controlar a visibilidade do menu em dispositivos móveis
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation(); // Obtém a localização (URL atual)

  return (
    <nav className="bg-[#b4270e] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Planet Burguer</Link>
        </div>
        
        {/* Botão de menu para telas pequenas */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu de navegação para telas grandes e mobile */}
        <div className={`lg:flex lg:space-x-10 flex-col lg:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className={`flex flex-col hover:scale-105 transition-all duration-100 ${location.pathname === "/" ? "text-yellow-400" : ""}`}>
            <Link to="/" className="hover:text-yellow-400">Início</Link>
          </div>
          <div className={`flex flex-col hover:scale-105 transition-all duration-100 ${location.pathname === "/menu" ? "text-yellow-400" : ""}`}>
            <Link to="/menu" className="hover:text-yellow-400">Cardápio</Link>
          </div>
          <div className={`flex flex-col hover:scale-105 transition-all duration-100 ${location.pathname === "/sobre" ? "text-yellow-400" : ""}`}>
            <Link to="/sobre" className="hover:text-yellow-400">Sobre</Link>
          </div>
          <div className={`flex flex-col hover:scale-105 transition-all duration-100 ${location.pathname === "/entrega " ? "text-yellow-400" : ""}`}>
            <Link to="/entrega " className="hover:text-yellow-400">Local de Entrega </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
