import { useState } from "react";

const EditForm = ({ todo, onUpdateTodo }) => {
  const [updatedTask, setUpdatedTask] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTodo(todo.id, updatedTask);
    setTask("");
  };

  return (
    <div className="my-6">
      <form onSubmit={handleSubmit} className="flex items-end max-sm:flex-col">
        <input
          name="task"
          type="text"
          className="max-sm:w-full w-3/4 max-sm:py-1 py-3 max-sm:px-2 px-6 sm:rounded-l-full text-blue-600"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />

        <button
          type="submit"
          className="sm:rounded-r-full w-1/4 max-sm:w-1/2 max-sm:py-1 py-3 max-sm:mt-2 bg-blue-600 text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditForm;
