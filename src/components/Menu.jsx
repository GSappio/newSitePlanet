import React from "react";
import CardItem from "./CardItem";
import menupromocao from '../mocks/menupromocao'

const Menu = () => {
  
  return (
    <section className="py-12 bg-gray-100 rounded px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">OS MAIS VENDIDOS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardItem data={menupromocao} />
        </div>
      </div>
    </section>
  );
};

export default Menu;
