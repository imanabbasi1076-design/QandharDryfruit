import {createContext, useState} from 'react';
import {useEffect} from 'react';

export const CartContext=createContext();

function CartProvider({children}){
    const [cartItems, setCartItems] = useState([]);     
     
  function addToCart(product) {
    const exists = cartItems.find(
      (item) => item.productName === product.productName,
    );
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.productName === product.productName
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  } 
    function removeFromCart(productName)
     { 
        setCartItems(cartItems.filter((item) => item.productName !== productName));
     }  
     function clearCart() {
        setCartItems([]);
     }  
     useEffect(() => {
       console.log("Cart updated! Total items:", cartItems.length);
     }, [cartItems]);
     return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
          {children}
        </CartContext.Provider>
      );
    }
    export default CartProvider;