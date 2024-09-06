// CartContext.js
import React, { createContext } from 'react';
import useCart from '../hooks/useCart';

// Cria o contexto
export const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
  const { adicionarIten, quantidadePedido } = useCart();

  return (
    <CartContext.Provider value={{ adicionarIten, quantidadePedido }}>
      {children}
    </CartContext.Provider>
  );
};
