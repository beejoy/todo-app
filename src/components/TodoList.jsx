import EditForm from "./EditForm";
import Todo from "./Todo";

const TodoList = ({
  todos,
  onToggleCompleted,
  onEditTodo,
  onUpdateTodo,
  onDeleteTodo,
}) => {
  return (
    <>
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditForm todo={todo} onUpdateTodo={onUpdateTodo} />
        ) : (
          <Todo
            key={todo.id}
            {...todo}
            onToggleCompleted={onToggleCompleted}
            onEditTodo={onEditTodo}
            onDeleteTodo={onDeleteTodo}
          />
        )
      )}
    </>
  );
};

export default TodoList;
