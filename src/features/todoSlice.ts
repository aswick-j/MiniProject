import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTodos } from "../actions/Todos";
import { getTodoTypes } from "../types/getTodo";

const initialState: getTodoTypes = {
  isGetTodoLoading: true,
  todosData: [],
  isGetTodoError: "",
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(getTodos.pending, (state) => {
      state.isGetTodoLoading = true;
    });
    builders.addCase(
      getTodos.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isGetTodoLoading = false;
        state.todosData = action.payload;
        state.isGetTodoError = "";
      }
    );
    builders.addCase(getTodos.rejected, (state) => {
      state.isGetTodoLoading = false;
      state.todosData = [];
      state.isGetTodoError = "Todo Error";
    });
  },
});

export const getTodoState = (state: any) => state.todos;

export const TodoReducer = TodoSlice.reducer;
