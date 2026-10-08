export function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={todo.done ? "todo completed" : "todo"}>
      {/*Toggle btn lives here */}
      <button
        type="button"
        className="toggle-btn"
        onClick={() => onToggle(todo.id)}
      >
        {todo.done ? "Undo" : "Done"}
      </button>

      <span>{todo.text}</span>

      <button
        type="button"
        className="delete-btn"
        onClick={() => onRemove(todo.id)}
        aria-label={`Delete ${todo.text}`}
        title="Delete todo"
      >
        🗑️ Delete
      </button>
    </li>
  );
}
