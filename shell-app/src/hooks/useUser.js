import { create } from 'zustand';

const INITIAL_STATE = {
  user: {
    name: 'John Doe',
    email: 'john@doe.com'
  },
  cart: []
}

const useUser = create((set) => ({
  ...INITIAL_STATE,
  updateUser: (user) => set({ user }),
  addCard: (item) => set((state) => ({ cart: [...state.cart] }))
}))

export default useUser;