import React from "react";
import walpaper from "../assets/images/walpaper.jpg"; // Caminho relativo correto

const Hero = () => {
  return (
    <section
      className="flex justify-center items-start relative bg-cover bg-center h-[100vh]"
      style={{ backgroundImage: `url(${walpaper})` }} // Usando a imagem importada
    >
      <div className="flex flex-col justify-center items-center mt-15 px-4 sm:px-8 md:px-12">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center">
          Bem-vindo à nossa Hamburgueria!
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-6 mt-2 text-center">
          Sabores incríveis esperam por você. Venha provar o melhor!
        </p>
        <a href="https://wa.me/13981618608?text=%3Cmensagem%3E" target="_blank">
          <button className="bg-gradient-to-r cursor-pointer from-[#ac2209d7] via-[#d30101] to-[#af1423] bg-[#b4270ed7] text-white py-4 px-12 mt-6 text-lg sm:text-2xl lg:text-4xl rounded-4xl shadow-lg hover:shadow-2xs hover:bg-[#b4270e]  
          hover:scale-105 transition-all duration-300 font-semibold" 
          style={{
            boxShadow: '0px 10px 25px 10px rgba(0, 0, 0, 0.8)', // Sombra personalizada
          }}>
            PEÇA AGORA
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
