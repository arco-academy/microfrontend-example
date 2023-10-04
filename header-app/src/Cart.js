import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/20/solid'

//? Hook vindo do Microfrontend shell-app
import useUser from 'shell/useUser';

function Cart() {
  const cart = useUser(state => state.cart) || []

  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
      <ShoppingCartIcon className="h-5 w-5 flex-none"/>
      <span className="ml-1 bg-red-600 text-white p-1 rounded-full leading-none flex items-center">
        {cart.length}
      </span>
    </div>
  )
}

export default Cart;