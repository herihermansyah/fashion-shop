import {ProductColor, ProductType} from "@/data/product-data";
import {create} from "zustand";
import {persist} from "zustand/middleware";

interface CartItem {
  product: ProductType;
  quantity: number;
  selectedSize: string;
  selectedColor: ProductColor;
}

interface useCartStoreType {
  cartItems: CartItem[];
  addToCart: (params: {
    newProduct: ProductType;
    size: string;
    color: ProductColor;
  }) => void;
  removeFromCart: (id: string | number, size: string, color: string) => void;
  incrementQuantity: (id: string | number, size: string, color: string) => void;
  decrementQuantity: (id: string | number, size: string, color: string) => void;
}

export const useCartStore = create<useCartStoreType>()(
  persist(
    (set) => ({
      cartItems: [],

      addToCart({newProduct, size, color}) {
        set((state) => {
          const isExist = state.cartItems.find(
            (item) =>
              item.product.id === newProduct.id &&
              item.selectedSize === size &&
              item.selectedColor.hex === color.hex,
          );

          if (isExist) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.product.id === newProduct.id &&
                item.selectedSize === size &&
                item.selectedColor.hex === color.hex
                  ? {...item, quantity: item.quantity + 1}
                  : item,
              ),
            };
          }

          return {
            cartItems: [
              ...state.cartItems,
              {
                product: newProduct,
                quantity: 1,
                selectedSize: size,
                selectedColor: color,
              },
            ],
          };
        });
      },
      removeFromCart(id, size, color) {
        set((state) => {
          return {
            cartItems: state.cartItems.filter(
              (item) =>
                item.product.id !== id ||
                item.selectedSize !== size ||
                item.selectedColor.hex !== color,
            ),
          };
        });
      },
      incrementQuantity(id, size, color) {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.product.id === id &&
            item.selectedSize === size &&
            item.selectedColor.hex === color
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        }));
      },
      decrementQuantity(id, size, color) {
        set((state) => {
          const targetItem = state.cartItems.find(
            (item) =>
              item.product.id === id &&
              item.selectedSize === size &&
              item.selectedColor.hex === color,
          );
          if (targetItem && targetItem.quantity === 1) {
            return {
              cartItems: state.cartItems.filter(
                (item) =>
                  item.product.id !== id ||
                  item.selectedSize !== size ||
                  item.selectedColor.hex !== color,
              ),
            };
          }

          return {
            cartItems: state.cartItems.map((item) =>
              item.product.id === id &&
              item.selectedColor.hex === color &&
              item.selectedSize === size
                ? {...item, quantity: item.quantity - 1}
                : item,
            ),
          };
        });
      },
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        cartItems: state.cartItems,
      }),
    },
  ),
);
