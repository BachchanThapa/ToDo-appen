export function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={todo.done ? "todo completed" : "todo"}>
      {/*Toggle btn lives here */}
      <button type="button" onClick={() => onToggle(todo.id)}>
        {todo.done ? "Undo" : "Done"}
      </button>

      <span>{todo.text}</span>

      <button type="button" onClick={() => onRemove(todo.id)}>
        Delete
      </button>
    </li>
  );
}
