import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProductsData = createAsyncThunk("GetProductsData", async () => {
  try {
    const response = await axios.get("http://localhost:3000/books");
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const GetSingleProduct = createAsyncThunk("GetSingleProduct", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:3000/books/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
export const DeleteProduct = createAsyncThunk("DeleteProduct", async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/books/${id}`);
    console.log(response)
    return id;
  } catch (error) {
    console.log(error);
  }
});
export const AddNewProduct = createAsyncThunk("AddNewProduct", async (item) => {
  try {
    const response = await axios.post(`http://localhost:3000/books/`, item);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const UpdateProduct = createAsyncThunk("UpdateProduct", async ({ id, item }, thunkAPI) => {
  try {
    console.log("UpdateProduct works>>",id, item)
    const response = await axios.put(`http://localhost:3000/books/${id}`, item);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message)
  }
});
