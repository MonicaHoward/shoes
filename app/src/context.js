import React from 'react';

const InventoryContext = React.createContext({
    products: [
      {
        id: 1,
        serialNumber: "1122334455",
        productName: "Gucci Flip Flops",
        productDescription: "Premium, luxury footwear lorem ipsum",
        originalPrice: 60
      },
      {
        id: 2,
        serialNumber: "2233445566",
        productName: "Porche Panamera",
        productDescription: "Super fast super clean premium luxury motor car",
        originalPrice: 160

      },
      {
        id: 3,
        serialNumber: "3344556677",
        productName: "Balmain Fashions",
        productDescription: "Cute but over priced fashion shirt.",
        originalPrice: 110

      },
      {
        id: 3,
        serialNumber: "3344556677",
        productName: "Balmain Fashions",
        productDescription: "Cute but over priced fashion shirt.",
        originalPrice: 110

      }
    ]
  
  })

  export default InventoryContext;