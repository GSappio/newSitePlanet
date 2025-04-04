import React, { useState } from 'react';

import bairrosPraiaGrande from '../mocks/bairrosPraiaGrande'
import bairrosMongagua from '../mocks/bairrosMongagua'

const ZonaEntrega = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDeliveryArea, setIsDeliveryArea] = useState(null);

    // Função de busca de bairro
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const foundInPraiaGrande = bairrosPraiaGrande.some((bairro) =>
            bairro.toLowerCase().includes(e.target.value.toLowerCase())
        );
        const foundInMongagua = bairrosMongagua.some((bairro) =>
            bairro.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setIsDeliveryArea(foundInPraiaGrande || foundInMongagua);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-semibold text-center text-[#b4270e] mb-8">
                Área de Entrega
            </h1>
            <p className="text-lg text-center text-gray-600 mb-4">
                Verifique se o seu bairro está dentro da nossa área de entrega.
            </p>

            <div className="mb-8 text-center">
                <input
                    type="text"
                    placeholder="Pesquise o seu bairro"
                    className="p-2 rounded border border-gray-300"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {isDeliveryArea !== null && (
                    <p className="mt-2 text-lg">
                        {isDeliveryArea
                            ? 'Seu bairro está na nossa zona de entrega!'
                            : 'Infelizmente, seu bairro não está na nossa zona de entrega.'}
                    </p>
                )}
            </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Praia Grande */}
                    <div className="bg-white p-4 rounded shadow-lg" style={{
                        boxShadow: '0px 5px 10px 5px rgba(0, 0, 0, 0.1)', // Sombra personalizada
                    }}>
                        <h2 className="text-2xl font-semibold text-[#b4270e] mb-4">
                            Praia Grande
                        </h2>
                        <ul className="space-y-2">
                            {bairrosPraiaGrande.map((bairro, index) => (
                                <li key={index} className="text-lg text-gray-700">- {bairro}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Mongaguá */}
                    <div className="bg-white p-4 rounded shadow-lg " style={{
                        boxShadow: '0px 5px 10px 5px rgba(0, 0, 0, 0.1)', // Sombra personalizada
                    }}>
                        <h2 className="text-2xl font-semibold text-[#b4270e] mb-4">
                            Mongaguá
                        </h2>
                        <ul className="space-y-2">
                            {bairrosMongagua.map((bairro, index) => (
                                <li key={index} className="text-lg text-gray-700">- {bairro}</li>
                            ))}
                        </ul>
                    </div>
            </div>

            {/* Contato */}
            <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-[#b4270e] mb-4">Dúvidas?</h3>
                <p className="text-lg text-gray-600 mb-4">
                    Se você tiver dúvidas sobre nossa área de entrega, entre em
                    <a
                        href="https://wa.me/13981618608?text=Olá, gostaria de saber mais sobre a área de entrega."
                        target="_blank"
                        className="text-[#b4270e] font-semibold"
                    >
                        contato
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ZonaEntrega;
