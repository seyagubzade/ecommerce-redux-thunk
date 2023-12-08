import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [],
    loading: false,
    error: null
}

const basketSlice = createSlice({
    name: 'basketSlice',
    initialState,
    reducers: {
        addItemToBasket: (state, action) => {
            const item = action.payload;
            const targetIndex = state.basket.findIndex(basketItem => item.id === basketItem.id);
            const newData = [...state.basket];
            if (targetIndex !== -1) {
                newData[targetIndex] = {
                    ...newData[targetIndex],
                    count: newData[targetIndex].count + 1,
                    totalPrice: newData[targetIndex].totalPrice + newData[targetIndex].price
                };
                state.basket = [...newData];
            }
            else{
                newData.push({...action.payload, count: 1, totalPrice: action.payload.price})
                state.basket = [...newData];
            }
            localStorage.setItem('basket', JSON.stringify([...state.basket]))
        }   
    }
})

export const {addItemToBasket} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;