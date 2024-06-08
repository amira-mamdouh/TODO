import React from "react";
import { TbTrash } from "react-icons/tb";

interface Task {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  tasks: Task[];
  toggleComplete: (index: number) => void;
  deleteTask: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  toggleComplete,
  deleteTask,
}) => {
  return (
    <ul className="list-group w-75 m-auto pt-5">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item mb-3">
          <input
            className="form-check-input me-1 position-relative"
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(index)}
          />
          <label className="form-check-label">
            {task.text}
            <TbTrash
              size={20}
              className="position-absolute trash"
              onClick={() => deleteTask(index)}
            />
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
