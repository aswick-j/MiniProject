import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/todos";

export const getTodos = createAsyncThunk(
  "Todos/getTodos",
  async (_, thunkAPI) => {
    console.log("=====");
    try {
      const { data } = await axios.get(BASE_URL);
      return data;
    } catch (e: unknown) {
      return thunkAPI.rejectWithValue(e?.response.data);
    }
  }
);
export const addTodos = createAsyncThunk(
  "Todos/addTodos",
  async (payload, thunkAPI) => {
    console.log("=====");
    try {
      const { data } = await axios.post(BASE_URL, payload);
      return data;
    } catch (e: unknown) {
      return thunkAPI.rejectWithValue(e?.response.data);
    }
  }
);
