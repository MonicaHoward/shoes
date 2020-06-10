import React from 'react';

const inventoryContext = React.createContext({
    products: [
      {
        id: 1,
        serialNumber: "1122334455",
        productName: "Gucci Flip Flops",
        productDescription: "Premium, luxury footwear lorem ipsum"
      },
      {
        id: 2,
        serialNumber: "2233445566",
        productName: "Porche Panamera",
        productDescription: "Super fast super clean premium luxury motor car"
      },
      {
        id: 3,
        serialNumber: "3344556677",
        productName: "Balmain Fashions",
        productDescription: "Cute but over priced fashion shirt."
      }
    ]
  
  })

  export default inventoryContext;