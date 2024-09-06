// Button.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Button() {
  const { adicionarIten } = useContext(CartContext);

  const iten = {
    "nome": "jonatas"
  };

  return (
    <div>
      <button onClick={() => adicionarIten(iten)}>Adicionar Item</button>
    </div>
  );
}
