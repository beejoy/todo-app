import "./App.css";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("TODOS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  const addNewTodo = (task) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        task: task,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTodo = (id, task) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    window.scroll({
      top: Number.MAX_SAFE_INTEGER,
      behavior: "smooth",
    });
  }, [todos]);

  return (
    <div className="app flex justify-center">
      <div className="w-3/4 sm:w-2/3 bg-slate-500 max-sm:p-5 p-10 rounded-lg shadow-xl">
        <h1 className="max-sm:text-2xl text-4xl font-bold text-white">
          Things To do
        </h1>

        <TodoForm onSubmit={addNewTodo} />

        <TodoList
          todos={todos}
          onToggleCompleted={toggleCompleted}
          onEditTodo={editTodo}
          onUpdateTodo={updateTodo}
          onDeleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
