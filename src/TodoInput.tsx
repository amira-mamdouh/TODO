import React, { ChangeEvent, FormEvent } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface TodoInputProps {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: FormEvent) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ task, setTask, addTask }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <form className="p-5 d-flex justify-content-center" onSubmit={addTask}>
      <input
        className="form-control w-50 me-3"
        placeholder="Add a new task..."
        type="text"
        value={task}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-cre">
        Create <AiOutlinePlusCircle size={20} />
      </button>
    </form>
  );
};

export default TodoInput;
