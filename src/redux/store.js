import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Products/productSlice";
import { orderReducer } from "./Orders/orderSlice";
import { cartReducer } from "./Cart/cartSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        order: orderReducer
    }
})

export default store;