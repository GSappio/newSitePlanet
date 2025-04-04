import React, { useState } from 'react';

import bairrosPraiaGrande from '../mocks/bairrosPraiaGrande';
import bairrosMongagua from '../mocks/bairrosMongagua';

const todosBairros = [...bairrosPraiaGrande, ...bairrosMongagua];

const ZonaEntrega = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDeliveryArea, setIsDeliveryArea] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    // Função de busca de bairro com sugestão de autocomplete
    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term.length > 0) {
            const filteredSuggestions = todosBairros.filter((bairro) =>
                bairro.toLowerCase().startsWith(term.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }

        const found = todosBairros.some((bairro) =>
            bairro.toLowerCase().includes(term.toLowerCase())
        );
        setIsDeliveryArea(found);
    };

    // Preencher o input ao clicar em uma sugestão
    const handleSuggestionClick = (bairro) => {
        setSearchTerm(bairro);
        setSuggestions([]); // Esconder sugestões após seleção
        setIsDeliveryArea(true); // Definir que a área está na zona de entrega
    };

    return (
        <div className="container mx-auto p-6 py-12">
            <h1 className="text-4xl font-semibold text-center text-[#b4270e] mb-8">
                Área de Entrega
            </h1>
            <p className="text-lg text-center text-gray-600 mb-4">
                Verifique se o seu bairro está dentro da nossa área de entrega.
            </p>

            <div className="mb-8 text-center relative w-80 mx-auto">
                <input
                    type="text"
                    placeholder="Pesquise o seu bairro"
                    className="p-2 rounded border border-gray-300 w-full"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {/* Exibir sugestões abaixo do input */}
                {suggestions.length > 0 && (
                    <ul className="absolute left-0 right-0 bg-white border border-gray-300 mt-1 rounded shadow-md max-h-40 overflow-y-auto">
                        {suggestions.map((bairro, index) => (
                            <li
                                key={index}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleSuggestionClick(bairro)}
                            >
                                {bairro}
                            </li>
                        ))}
                    </ul>
                )}
                {isDeliveryArea !== null && (
                    <p className="mt-2 text-lg font-bold">
                        {isDeliveryArea
                            ? 'Seu bairro está na nossa zona de entrega!'
                            : 'Infelizmente, seu bairro não está na nossa zona de entrega.'}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Praia Grande */}
                <div className="bg-white p-4 rounded shadow-2xl">
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
                <div className="bg-white p-4 rounded shadow-2xl">
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
                <span className='flex justify-center items-center gap-1'>
                    <p className="text-lg text-gray-600">
                        Se você tiver dúvidas sobre nossa área de entrega, entre em
                    </p>
                    <a
                        href="https://wa.me/13981618608?text=Olá, gostaria de saber mais sobre a área de entrega."
                        target="_blank"
                        className="text-[#b4270e] font-semibold text-lg"
                    >
                        contato
                    </a>
                </span>
            </div>
        </div>
    );
};

export default ZonaEntrega;
