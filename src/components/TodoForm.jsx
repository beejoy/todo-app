import { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask("");
  };

  return (
    <div className="my-6">
      <form onSubmit={handleSubmit} className="flex items-end max-sm:flex-col">
        <input
          name="task"
          type="text"
          placeholder="Enter todo task"
          className="max-sm:w-full w-3/4 max-sm:py-1 py-3 max-sm:px-2 px-6 sm:rounded-l-full text-blue-600"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          type="submit"
          className="sm:rounded-r-full w-1/4 max-sm:w-1/2 max-sm:py-1 py-3 max-sm:mt-2 bg-blue-600 text-white"
        >
          Save Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
