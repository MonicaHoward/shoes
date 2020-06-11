import React from 'react';

const InventoryContext = React.createContext({
    products: [
      {
        id: 1,
        img: "https://cdn2.basket4ballers.com/86952-large_default/nike-kyrie-6-cncpts-pink-tint-guava-ice-cu8879-600.jpg",
        serialNumber: "CU8879600",
        productName: "Nike Kyrie 6 Cncpts",
        productDescription: "Premium, luxury footwear lorem ipsum",
        originalPrice: 129,
        inFavs: false

      },
      {
        id: 2,
        img: "https://cdn2.basket4ballers.com/93125-large_default/nike-lebron-witness-4-summit-white-summit-white-opti-yellow-bv7427-102.jpg",
        serialNumber: "2233445566",
        productName: "Nike Lebron Witness 4 summit",
        productDescription: "Super fast super clean premium luxury motor car",
        originalPrice: 99,
        inFavs: false


      },
      {
        id: 3,
        img: "https://cdn2.basket4ballers.com/93023-large_default/jordan-why-not-zer03-washed-coral-pale-ivory-black-cd3003-600.jpg",
        serialNumber: "3344556677",
        productName: "Jordan 'why Not?' Zer0.3",
        productDescription: "Cute but over priced fashion shirt.",
        originalPrice: 139,
        inFavs: false

      },
      {
        id: 4,
        img: "https://cdn2.basket4ballers.com/79538-large_default/jordan-why-not-zer02-washed-coral-washed-coral-gum-yellow-ao6219-600.jpg",
        serialNumber: "3344556677",
        productName: "Jordan 'why Not?' Zer0.2 washed",
        productDescription: "Cute but over priced fashion shirt.",
        originalPrice: 110,
        inFavs: false

      },
      {
        id: 5,
        img: "https://cdn1.basket4ballers.com/92879-large_default/harden-vol-4-gca-fw7498.jpg",
        serialNumber: "1122334455",
        productName: "Harden Vol. 4G",
        productDescription: "Premium, luxury footwear lorem ipsum",
        originalPrice: 129,
        inFavs: false

      },
      {
        id: 6,
        img: "https://cdn1.basket4ballers.com/90323-large_default/nike-zoom-kd12-as-multi-color-multi-color-cd4982-900.jpg",
        serialNumber: "2233445566",
        productName: "Nike Zoom Kd12",
        productDescription: "Super fast super clean premium luxury motor car",
        originalPrice: 160,
        inFavs: false


      },
      {
        id: 7,
        img: "https://cdn1.basket4ballers.com/89374-large_default/nike-kyrie-6-oracle-aqua-black-opti-yellow-bq4630-300.jpg",
        serialNumber: "3344556677",
        productName: "Nike Kyrie 6 oracle",
        productDescription: "Cute but over priced fashion shirt.",
        originalPrice: 129,
        inFavs: false

      },
      {
        id: 8,
        img: "https://cdn2.basket4ballers.com/91201-large_default/jordan-aerospace-720-black-blue-fury-reflect-silver-bv5502-004.jpg",
        serialNumber: "3344556677",
        productName: "Jordan Aerospace 720",
        productDescription: "Cute but over priced fashion shirt.",
        originalPrice: 110,
        inFavs: false

      },
      {
        id: 9,
        img: "https://cdn2.basket4ballers.com/87923-large_default/nike-pg-4-gatorade-gx-regency-purple-cd5078-500.jpg",
        serialNumber: "1122334455",
        productName: "Nike PG 4 Gatorad",
        productDescription: "Premium, luxury footwear lorem ipsum",
        originalPrice: 60,
        inFavs: false

      },
      {
        id: 10,
        img: "https://cdn1.basket4ballers.com/90519-large_default/puma-hardwood-retro-white-orge.jpg",
        serialNumber: "2233445566",
        productName: "Puma Hardwood Retro",
        productDescription: "Super fast super clean premium luxury motor car",
        originalPrice: 160,
        inFavs: false


      }
    ]
  
  })

  export default InventoryContext;