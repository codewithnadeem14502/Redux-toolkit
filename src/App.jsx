import React from "react";
import { Provider } from "react-redux";
import Todos from "./components/Todo";
import AddTodo from "./components/AddTodo";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
  );
};

export default App;
