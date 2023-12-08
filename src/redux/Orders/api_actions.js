import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const PostOrederItem = createAsyncThunk("PostOrederItem", async (item) => {
  try {
    const response = await axios.post("http://localhost:3000/order", item);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
