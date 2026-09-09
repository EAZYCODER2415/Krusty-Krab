import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load from localStorage on initial render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (foodMenu) => {
    const foodItems = ["krabby-patty", "coral-bits", "barnacle-loaf", "jelly-patty", "kelp-jerky", "pretty-patty", "krusty-pizza", "pizza-patty", "krabby-meal", "krusty-kelp-dog", "buttered-barnacles", "nachos", "krabby-newburg", "kelp-rings", "swedish-barnacle-balls", "pipsqueak-patty", "krusty-kid-meal", "spongebob-sundae", "jelly-cake", "kelp-shake", "krusty-soda"];
    const foodNames = ["Krabby Patty", "Coral Bits", "Barnacle Loaf", "Jelly Patty", "Kelp Jerky", "Pretty Patty", "Krusty Pizza", "Pizza Patty", "Krabby Meal", "Krusty Kelp Dog", "Buttered Barnacles", "Nachos", "Krabby Newburg", "Kelp Rings", "Swedish Barnacle Balls", "Pipsqueak Patty", "Krusty Kid's Meal", "Spongebob's Sundae", "Jelly Cake", "Kelp Shake", "Krusty Soda"];
    const foodPrices = [16, 8, 12, 17, 5, 18, 17, 19, 25, 14, 17, 13, 30, 13, 8, 7, 10, 7, 10, 10, 9];

    let itemPresent = false;
    if (cart.length === 0) {
      itemPresent = false;
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i][0] === foodMenu) {
          itemPresent = true;
          break;
        } else {
          itemPresent = false;
        }
    if (itemPresent) {
      increment(foodMenu);
    } else {
      let fooditem = "";
      let foodname = "";
      let foodprice = 0;
      let foodquantity = 0;
      let foundIndex = -1;
      for (let i = 0; i < foodItems.length; i++) {
        if (foodMenu === foodItems[i]) {
          foundIndex = i;
          break;
        }
      }
      
      if (foundIndex !== -1) {
        fooditem = foodItems[foundIndex];
        foodname = foodNames[foundIndex];
        foodprice = foodPrices[foundIndex];
        foodquantity = 1;
        setCart(prev => [...prev, [fooditem, foodname, foodprice, foodquantity]]);
      }
    }
      }
    }
  };

  const removeFromCart = (f2) => {
    setCart(prev => prev.filter(item => item[0] !== f2));
  };

  const decrement = (fooditems) => {
    setCart(prev => {
      const newCart = prev.map(item => {
        if (item[0] === fooditems) {
          const quantity = item[3] - 1;
          if (quantity === 0) {
            return null; // Will be filtered out
          }
          return [item[0], item[1], item[2], quantity];
        }
        return item;
      }).filter(item => item !== null);
      return newCart;
    });
  };

  const increment = (fooditems) => {
    setCart(prev => {
      return prev.map(item => {
        if (item[0] === fooditems) {
          return [item[0], item[1], item[2], item[3] + 1];
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  // Compute total price and quantity
  const totalPrice = cart.reduce((sum, item) => sum + (item[2] * item[3]), 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item[3], 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      decrement,
      increment,
      clearCart,
      totalPrice,
      totalQuantity,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};