import React, { useState } from 'react';

// Framer Motion
import { motion } from 'framer-motion';

export default function CardProductMenu({ data }) {
  const [modalShow, setModalShow] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeModal = () => {
    setModalShow(false)
  }

  const submitForm = (produto) => {
    setSelectedProduct(produto);
    setModalShow(true);
  };

  /* const adicionarAoCarrinho = (produto) => {
    closeModal();
  }; */

  return (
    <div className="flex flex-wrap">
      {data.map((item) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0,
            ease: 'easeOut'
          }}
          key={item.id} className="w-full sm:w-6/12 md:w-4/12 lg:w-1/4 p-4 transform scale-100 transition-transform duration-500"
        >
          <div className="bg-white shadow-md flex flex-col h-full rounded-lg lg:p-2">
            <div className="flex-shrink-0 lg:p-4">
              <img
                src={item.imageSrc}
                alt="Product"
                className="w-full rounded-md"
              />
            </div>
            <div className="px-4 flex-grow">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className={`flex px-2 py-4 ${item.price ? 'justify-between' : 'justify-center'}`}>
              {item.price && (
                <div className={`flex justify-center font-semibold text-sm border-b-2 w-4/9 border-green-600 bg-green-600 text-white p-2  rounded ${item.price ? 'w-11-12' : 'w-4/9'}`}>Tradicional:<span className='pl-1 text-bold'>{item.price}</span></div>
              )}
              <div className={`flex justify-center font-semibold text-sm border-b-2 border-green-600 bg-green-600 text-white p-2 rounded ${item.price ? 'w-4/9 ' : 'w-11/12'}`}>Turbo:<span className='pl-1 text-bold'>{item.priceTurbo}</span></div>
            </div>
          </div>  
        </motion.div>
      ))}
    </div>
  )
}
