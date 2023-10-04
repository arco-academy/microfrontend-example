import { create } from 'zustand';

import { toast } from 'react-toastify';

const INITIAL_STATE = {
  user: {
    name: 'John Doe',
    email: 'john@doe.com'
  },
  cart: []
}

const useUser = create((set, get) => ({
  ...INITIAL_STATE,
  updateUser: (user) => set({ user }),
  addCard: (item) => {
    const items = get().cart;

    set({ cart: [...items, item]})

    toast.success('Item adicionado ao carrinho!')
  }
}))

export default useUser;