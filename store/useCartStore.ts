import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  
  addToCart: (newItem) => set((state) => {
    const existingIndex = state.cart.findIndex(item => item.id === newItem.id);
    if (existingIndex !== -1) {
      // Jika barang sudah ada, tambah jumlahnya
      const updatedCart = [...state.cart];
      updatedCart[existingIndex].quantity += 1;
      return { cart: updatedCart };
    }
    return { cart: [...state.cart, { ...newItem, quantity: 1 }] };
  }),

  clearCart: () => set({ cart: [] }),

  // Fungsi get() digunakan untuk mengambil nilai state saat ini di dalam store
  getTotalPrice: () => {
    return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));