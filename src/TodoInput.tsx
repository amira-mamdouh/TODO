import React, { useState, FormEvent } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form className="p-5 d-flex justify-content-center" onSubmit={handleSubmit}>
      <input
        className="form-control w-50 me-3"
        placeholder="Add a new task..."
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn btn-cre">
        Create <AiOutlinePlusCircle size={20} />
      </button>
    </form>
  );
};

export default TodoInput;
