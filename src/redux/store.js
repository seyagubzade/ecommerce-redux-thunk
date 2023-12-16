import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Products/productSlice";
import { orderReducer } from "./Orders/orderSlice";
import { cartReducer } from "./Cart/cartSlice";
import { wishlistReducer } from "./Wishlist/wishlistSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        order: orderReducer,
        wishlist: wishlistReducer,
    }
})

export default store;