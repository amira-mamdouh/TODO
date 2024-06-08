import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <>
      <header className="p-5 text-center">
        <div className="container">
          <h1>TODO APP</h1>
          <TodoInput task={task} setTask={setTask} addTask={addTask} />
        </div>
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="create d-flex justify-content-center align-items-center">
                <p className="pe-3 mb-0">Create Tasks</p>
                <span>{tasks.length}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="completed d-flex justify-content-center align-items-center">
                <p className="pe-3 mb-0">Completed Tasks</p>
                <span>
                  {tasks.filter((task) => task.completed).length} of{" "}
                  {tasks.length}
                </span>
              </div>
            </div>
          </div>
          <TodoList
            tasks={tasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>
      </section>
    </>
  );
};

export default App;
