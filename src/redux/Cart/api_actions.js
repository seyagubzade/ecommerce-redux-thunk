import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetCartItems = createAsyncThunk("GetCartItems", async () => {
    try {
        const response = await axios.get("http://localhost:3000/cart");
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const PostCartItem = createAsyncThunk("PostCartItem", async (item, rejectWithValue) => {
    try {
        console.log("PostCartItem item>>", item)
        const response = await axios.post("http://localhost:3000/cart", item);
        return response.data;
    } catch (error) {
        console.log('PostCartItem error>>', item, error)
        return rejectWithValue(error.message)
    }
});

export const DeleteCartItem = createAsyncThunk("DeleteCartItem", async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/cart/${id}`);
        return id;
    } catch (error) {
        console.log(error);
    }
});

export const UpdateCartItem = createAsyncThunk("UpdateCartItem", async ({ id, item }, thunkAPI) => {
    try {
        console.log("UpdateOrder works>>", id, item)
        const response = await axios.put(`http://localhost:3000/cart/${id}`, item);
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message)
    }
});