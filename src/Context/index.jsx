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
  const [cartShopDS, setCartShopDS] = useState(false);
  const [numCartShop, setNumCartShop] = useState(0);
  const [cartListShop, setCartListShop] = useState([]);

  const AddShopingCart = () => {
    const rep = cartListShop.findIndex((el)=> el === item);
  }

  // ######## Product Detail
  const [orderDS, setOrderDS] = useState(false);
  const [itemDetail, setItemDetail] = useState({});

  return (
    <RandomStoreContext.Provider value={{
        products, 
        numCartShop, setNumCartShop,
        orderDS, setOrderDS,
        itemDetail, setItemDetail,
        cartListShop, setCartListShop,
        cartShopDS, setCartShopDS
    }}>
        {children}
    </RandomStoreContext.Provider>
  );
}


