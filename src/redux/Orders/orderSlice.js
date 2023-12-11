import { createSlice } from "@reduxjs/toolkit";
import { PostOrederItem, GetOrders, DeleteOrder, GetSingleOrder, UpdateOrder } from "./api_actions";

const initialState = {
    orders: [],
    loading: false,
    error: null,
    currentOrder: null,
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

        //Getorders
        .addCase(GetOrders.fulfilled, (state, action)=>{
            state.orders = action.payload;
            state.loading = false;
        })
        .addCase(GetOrders.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(GetOrders.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        //DeleteOrder
        .addCase(DeleteOrder.fulfilled, (state, action)=>{
            state.loading = false;
            const deletedProductId = action.payload;
            state.orders = state.orders.filter(order => order.id !== deletedProductId);
        })
        .addCase(DeleteOrder.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(DeleteOrder.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        //GetSingleOrder
        .addCase(GetSingleOrder.fulfilled, (state, action)=>{
            state.loading = false;
            state.currentOrder = action.payload;
        })
        .addCase(GetSingleOrder.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(GetSingleOrder.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })

         // UpdateOrder
         .addCase(UpdateOrder.fulfilled, (state, action)=>{
            state.loading = false;
        })
        .addCase(UpdateOrder.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(UpdateOrder.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export const orderReducer = orderSlice.reducer;
