import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Products/productSlice";
import { basketReducer } from "./Basket/basketSlice";
import { orderReducer } from "./Orders/orderSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer,
        order: orderReducer
    }
})

export default store;