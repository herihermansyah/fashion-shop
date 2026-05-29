import {ProductType} from "@/data/product-data";
import {create} from "zustand";

interface UseFavoriteStore {
  favoriteItems: ProductType[];
  addToFavorite: (product: ProductType) => void;
  removeFromFavorite: (id: string | number) => void;
}

export const useFavoriteStore = create<UseFavoriteStore>()((set) => ({
  favoriteItems: [],
  addToFavorite(product) {
    set((state) => {
      const isExist = state.favoriteItems.find(
        (item) => item.id === product.id,
      );
      if (isExist) {
        return state;
      }

      return {
        favoriteItems: [...state.favoriteItems, product],
      };
    });
  },
  removeFromFavorite(id) {
    set((state) => ({
      favoriteItems: state.favoriteItems.filter((item) => item.id !== id),
    }));
  },
}));
