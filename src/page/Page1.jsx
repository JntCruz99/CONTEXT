import React from 'react'
import Carrinho from '../components/Carrinho'
import Button from '../components/Button'
import { CartProvider } from '../context/CartContext'

function Page1() {
  return (
    <CartProvider>
        <Button/>
        <Carrinho/>
    </CartProvider>
  )
}

export default Page1