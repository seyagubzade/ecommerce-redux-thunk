import { createSlice } from "@reduxjs/toolkit";
import { PostOrederItem } from "./api_actions";

const initialState = {
    orders: [],
    loading: false,
    error: null
}

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {},
    extraReducers: (builer)=>{
        builer
        .addCase(PostOrederItem.fulfilled, (state, action)=>{
            state.orders.push(action.payload)
            state.loading = false;
        })
        .addCase(PostOrederItem.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(PostOrederItem.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const orderReducer = orderSlice.reducer;
