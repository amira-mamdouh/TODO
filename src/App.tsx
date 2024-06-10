import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { addTodo, toggleTodo, deleteTodo, editTodo } from "./store/todoSlice";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const App: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id: number, text: string) => {
    dispatch(editTodo({ id, text }));
  };

  return (
    <div className="container">
      <header className="p-5 text-center">
        <h1>TODO APP</h1>
        <TodoInput addTodo={handleAddTodo} />
      </header>
      <section>
        <TodoList
          todos={todos}
          toggleTodo={handleToggleTodo}
          deleteTodo={handleDeleteTodo}
          editTodo={handleEditTodo}
        />
      </section>
    </div>
  );
};

export default App;
