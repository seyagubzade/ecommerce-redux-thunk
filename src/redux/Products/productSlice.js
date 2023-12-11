import { createSlice } from "@reduxjs/toolkit";
import { AddNewProduct, DeleteProduct, GetProductsData, GetSingleProduct, UpdateProduct } from "./api_actions";

const initialState = {
    product: [],
    loading: false,
    error: null,
    currentProduct: null
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        //GET All prods
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
        // GET Single Prod
        .addCase(GetSingleProduct.fulfilled, (state, action)=>{
            state.loading = false;
            state.currentProduct = action.payload;
            // console.log("GetSingleProduct.fulfilled>",action.payload)

        })
        .addCase(GetSingleProduct.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(GetSingleProduct.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload
            console.log("GetSingleProduct.rejected>",action)
        })


        // DELETE Prod
        .addCase(DeleteProduct.fulfilled, (state, action)=>{
            state.loading = false;
            console.log("DeleteProduct.fulfilled>>",action.payload)
            const deletedProductId = action.payload;
            state.product = state.product.filter(product => product.id !== deletedProductId);
        })
        .addCase(DeleteProduct.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(DeleteProduct.rejected, (state, action)=>{
            console.log("DeleteProduct.rejected>>",action)

            state.loading = false;
            state.error = action.payload
        })

        //Add new prod
        .addCase(AddNewProduct.fulfilled, (state, action)=>{
            state.loading = false;
            state.product = [...state.product, action.payload];
        })
        .addCase(AddNewProduct.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(AddNewProduct.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload
        })

        // UpdateProduct
        .addCase(UpdateProduct.fulfilled, (state, action)=>{
            state.loading = false;
        })
        .addCase(UpdateProduct.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(UpdateProduct.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export const productReducer = productSlice.reducer;