import React from 'react';
import fundosobre from '../assets/images/fundosobre.jpg'
import WhatsAppButton from '../components/WhatsAppButton';

const SobreNos = () => {
  return (
    <>
      <WhatsAppButton />
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nós</h2>
          <p className="text-xl text-gray-600 mb-20">
            Na nossa hamburgueria, a paixão por um bom hambúrguer é o que nos move. Com ingredientes frescos e selecionados,
            criamos uma experiência única para nossos clientes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa História</h3>
              <p className="text-gray-600">
                Fundada em 2022, nossa hamburgueria nasceu do sonho de oferecer um lanche de qualidade,
                com um atendimento excepcional. Começamos em uma pequena cozinha e, hoje, estamos oferecendo os melhores lanches que você já experimentou!
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Nossa missão é proporcionar aos nossos clientes uma experiência gastronômica inesquecível, sempre com
                qualidade, sabor e amor em cada detalhe. Acreditamos que um bom lanche pode transformar o dia de
                qualquer pessoa!
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Equipe</h3>
              <p className="text-gray-600">
                Nossa equipe é formada por profissionais apaixonados pela gastronomia e pelo atendimento ao cliente.
                Cada membro tem um papel fundamental em garantir que sua experiência seja única e inesquecível.
              </p>
            </div>
          </div>

          {/* Seção de imagem de equipe ou loja */}
          <div className="mt-16 relative">
            <img
              src={fundosobre} // Substitua com a imagem da sua equipe ou loja
              alt="Nossa Equipe"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 text-white text-2xl">
              Somos uma família apaixonada por hambúrgueres!
            </div>
          </div>

          {/* Depoimentos de clientes */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">O que nossos clientes dizem</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
                <p className="text-gray-600 italic">"O melhor hambúrguer que já comi! O atendimento também é incrível."</p>
                <p className="mt-4 font-semibold text-gray-800">Ana Souza</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
                <p className="text-gray-600 italic">"Excelente qualidade e sabor. Recomendo a todos!"</p>
                <p className="mt-4 font-semibold text-gray-800">João Oliveira</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
                <p className="text-gray-600 italic">"Ambiente maravilhoso e hambúrgueres deliciosos. Vou voltar sempre!"</p>
                <p className="mt-4 font-semibold text-gray-800">Mariana Costa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreNos;
