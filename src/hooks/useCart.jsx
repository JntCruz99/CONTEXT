// useCart.js
import { useState } from "react";

export default function useCart() {
  const [pedidos, setPedidos] = useState([]);

  const adicionarIten = (iten) => {
    // Usando o operador de espalhamento para evitar mutação direta do estado
    setPedidos([...pedidos, iten]);
  };

  const quantidadePedido = () => {
    return pedidos.length;
  };

  return { adicionarIten, quantidadePedido };
}
