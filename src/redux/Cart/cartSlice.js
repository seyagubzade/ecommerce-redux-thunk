import { createSlice } from "@reduxjs/toolkit";
import { DeleteCartItem, GetCartItems, PostCartItem, UpdateCartItem } from "./api_actions";
import toast from "react-hot-toast";

const initialState = {
    carts: [],
    loading: false,
    error: null
}
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //GetCartItems
            .addCase(GetCartItems.fulfilled, (state, action) => {
                state.carts = action.payload;
                state.loading = false;
            })
            .addCase(GetCartItems.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(GetCartItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // PostCartItem 
            .addCase(PostCartItem.fulfilled, (state, action) => {
                state.carts = [...state.carts, action.payload];
                state.loading = false;
                console.log('PostCartItem.fulfilled>>', action.payload)
                localStorage.setItem('basket', JSON.stringify(state.carts));
            })
            .addCase(PostCartItem.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(PostCartItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //DeleteCartItem
            .addCase(DeleteCartItem.fulfilled, (state, action) => {
                state.loading = false;
                const deletedProductId = action.payload;
                state.carts = state.carts.filter(cart => cart.id !== deletedProductId);
            })
            .addCase(DeleteCartItem.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(DeleteCartItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // UpdateCartItem
            .addCase(UpdateCartItem.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(UpdateCartItem.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(UpdateCartItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const { addItemToBasket, increaseItemCount, decreaseItemCount } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
