import { createSlice } from "@reduxjs/toolkit";
import { dataPhoto, perfumeData, shoeData, watchData, womenCollections } from "../assets/assets";

const initialState = {
  items: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  statusTab: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity, productType } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId && item.productType === productType
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity, productType });
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    changeQuantity(state, action) {
      const { productId, quantity, productType } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId && item.productType === productType
      );
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter(
          (item) => item.productId !== productId || item.productType !== productType
        );
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;

export const selectTotalCost = (state, CollectionData) => {
  return state.cart.items.reduce((total, item) => {
    const productData = item.productType === 'men' ? dataPhoto : null || 
                        item.productType === 'women' ? womenCollections : null || 
                        item.productType === 'watch' ? watchData : null || 
                        item.productType === 'shoes' ? shoeData : null ||  
                        item.productType === 'perfume' ? perfumeData : null;
    const product = productData.find((prod) => prod.id === item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
};

export default cartSlice.reducer;
