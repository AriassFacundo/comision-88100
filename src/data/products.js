export const products = [
  { id:'1',
    name: 'GREEN CAMO CELULAR',
    category: 'ofertas',
    stock: 18,
    price: 6000,
    image: "https://i.postimg.cc/v8kQBvk4/greencamo.png"
},
  { id:'2',
    name: 'GRAPHITE CELULAR',
    category: 'ofertas',
    stock: 11,
    price: 6000,
    image: "https://i.postimg.cc/bYxhyjx6/graphite.png"
},

  { id:'3',
    name:'BAMBOO WOOD CELULAR',
    category: 'catalogo',
    stock: 13,
    price: 7999,
    image: "https://i.postimg.cc/wByCSKx1/bamboo.png"
},
  { id:'4',
    name: 'RED CELULAR',
    category: 'catalogo',
    stock: 9,
    price: 7999,
    image: "https://i.postimg.cc/B62dnx1y/red.png"
},
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id));
    }, 2000);
  });
};


export default products;