import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const isItemExist = [...state.wishlist].some(
        (item) => item.id == action.payload.id
      );
      if (isItemExist) {
        toast.error("Item already exists in your wishlist!");
      } else {
        state.wishlist = [...state.wishlist, action.payload];
        localStorage.setItem("wishlist", JSON.stringify([...state.wishlist]));
        toast.success("Successfully added to wishlist!");
      }
    },
    removeFromWishlist: (state, action) => {
        console.log(action.payload)
      let indexOfItem = [...state.wishlist].findIndex((item) => item.id==action.payload.id);
      
      if (indexOfItem==-1) {
        toast.error("Item does not exist in your wishlist!");
      } else {
        state.wishlist = [
            ...state.wishlist.slice(0, indexOfItem),
            ...state.wishlist.slice(indexOfItem+1)
        ]
        localStorage.setItem("wishlist", JSON.stringify([...state.wishlist]));
        toast.success("Item removed from wishlist!");
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
