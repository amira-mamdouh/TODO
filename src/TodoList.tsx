import React, { useState, KeyboardEvent } from "react";
import { TbTrash, TbEdit } from "react-icons/tb";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleKeyDown = (e: KeyboardEvent, id: number) => {
    if (e.key === "Enter") {
      editTodo(id, editText);
      setEditingId(null);
    }
  };

  return (
    <ul className="list-group w-75 m-auto pt-5">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item mb-3 d-flex justify-content-between align-items-center"
        >
          <div>
            <input
              className="form-check-input me-1"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, todo.id)}
              />
            ) : (
              <span>{todo.text}</span>
            )}
          </div>
          <div>
            <TbEdit
              size={20}
              className="me-2 btn-edit"
              onClick={() => handleEdit(todo.id, todo.text)}
            />
            <TbTrash
              size={20}
              className="me-2 btn-trash"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
