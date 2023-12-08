import { createSlice } from "@reduxjs/toolkit";
import { GetProductsData } from "./api_actions";

const initialState = {
    product: [],
    loading: false,
    error: null
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(GetProductsData.fulfilled, (state, action)=>{
            state.loading = false;
            state.product = action.payload;
        })
        .addCase(GetProductsData.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(GetProductsData.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export const productReducer = productSlice.reducer;