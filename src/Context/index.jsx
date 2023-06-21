import { createContext, useEffect, useState } from "react";

export const RandomStoreContext = createContext();

export function ProviderRandomStore ({children}) {

  // ######## Products List
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    try {
      fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=10`)
        .then(response => response.json())
        .then(data => setProducts(data))
    } catch (error) {
      console.error(`Oh no, ocurrió un error: ${error}`);
    }
      
  }, []);
 
  // ######## Shopping Cart
  const [numCartShop, setNumCartShop] = useState(0);

  // ######## Product Detail
  const [orderDS, setOrderDS] = useState(false);
  const [itemDetail, setItemDetail] = useState({});
  

  return (
    <RandomStoreContext.Provider value={{
        products, 
        numCartShop, setNumCartShop,
        orderDS, setOrderDS,
        itemDetail, setItemDetail
    }}>
        {children}
    </RandomStoreContext.Provider>
  );
}


