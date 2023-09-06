import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Todo = ({
  id,
  task,
  completed,
  onToggleCompleted,
  onEditTodo,
  onDeleteTodo,
}) => {
  return (
    <div className="flex justify-between my-3 max-sm:px-3 px-6 max-sm:py-2 py-4 max-sm:text-sm bg-slate-300 rounded-md shadow-md">
      <p
        className={`${
          completed ? "text-gray-400 line-through" : ""
        } cursor-pointer`}
        onClick={() => onToggleCompleted(id)}
      >
        {task}
      </p>
      <div className="flex justify-between gap-2">
        {!completed && (
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="cursor-pointer text-green-700"
            onClick={() => onEditTodo(id)}
          />
        )}
        <FontAwesomeIcon
          icon={faTrashCan}
          className="cursor-pointer text-red-700"
          onClick={() => onDeleteTodo(id)}
        />
      </div>
    </div>
  );
};

export default Todo;
