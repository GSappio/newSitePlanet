import comboxfrango from '../assets/images/comboxfrango.jpg'
import xtudo from '../assets/images/cardapio/xtudo.jpg'
import comboxsalada from '../assets/images/comboxsalada.jpg'

const menupromocao = [
    {
        id: 1,
        name: "COMBO X-FRANGO",
        price: "25,00",
        priceTurbo: 'R$ 30,00',
        description: "Carne suculenta com queijo derretido.",
        image: comboxfrango
    },
    {
        id: 2,
        name: "X-TUDO",
        price: "",
        priceTurbo  : "R$ 25,90",
        description: "Hamburguer de vegetais.",
        image: xtudo
    },
    {
        id: 3,
        name: "COMBO X-SALADA",
        price: "R$ 30,00",
        priceTurbo  : "R$ 35,00",
        description: "Hamburguer com queijo cheddar.",
        image: comboxsalada
    }
];

export default menupromocao
