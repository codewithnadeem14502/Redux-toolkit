import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello word",
    },
  ],
};
// slice created here
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // methods = reducer -> property (addtodo) , function ()

    // action.payload -> text message
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    // action.payload -> id
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload ? (todo.text = action.payload) : todo
      );
    },
  },
});

// individual func export
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// main export
export default todoSlice.reducer;
