// Carrinho.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Carrinho() {
  const { quantidadePedido } = useContext(CartContext);

  return (
    <div>
      <span>Quantidade de Itens: </span>
      <span>{quantidadePedido()}</span>
    </div>
  );
}
