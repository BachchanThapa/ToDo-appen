export function TodoItem({ todo, onToggle }) {
  return (
    <li className={todo.done ? "todo completed" : "todo"}>
      {/*Toggle btn lives here */}
      <button type="button" onClick={() => onToggle(todo.id)}>
        {todo.done ? "Undo" : "Done"}
      </button>

      <span>{todo.text}</span>
    </li>
  );
}
