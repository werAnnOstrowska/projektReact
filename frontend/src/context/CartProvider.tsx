import React, { useReducer, useCallback } from "react";
import { CartContext } from "./CartContext";

export type CartItem = {
  id: string;
  title: string;
  img: string;
  quantity: number;
  price: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
};

type Action = 
  | { type: 'ADD_ITEM'; item: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; id: string };

const cartReducer = (state: CartItem[], action: Action): CartItem[] => {
  switch(action.type) {
    case 'ADD_ITEM': {
      const exists = state.find(i => i.id === action.item.id);
      if (exists) {
        return state.map(i => 
          i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...state, { ...action.item, quantity: 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== action.id);
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    dispatch({ type: 'ADD_ITEM', item });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
