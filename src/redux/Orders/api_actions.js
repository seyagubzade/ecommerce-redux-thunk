import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const PostOrederItem = createAsyncThunk("PostOrederItem", async (item) => {
  try {
    const response = await axios.post("http://localhost:3000/orders", item);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const GetOrders = createAsyncThunk("GetOrders", async () => {
  try {
    const response = await axios.get("http://localhost:3000/orders");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const GetSingleOrder = createAsyncThunk("GetSingleOrder", async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/orders/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const DeleteOrder = createAsyncThunk("DeleteOrder", async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/orders/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
});

export const UpdateOrder = createAsyncThunk("UpdateOrder", async ({ id, item }, thunkAPI) => {
  try {
    console.log("UpdateOrder works>>",id, item)
    const response = await axios.put(`http://localhost:3000/orders/${id}`, item);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message)
  }
});