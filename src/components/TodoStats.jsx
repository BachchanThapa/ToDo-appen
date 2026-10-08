export function TodoStats({ todos }) {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.done).length;
  const remaining = todos.length - completed;

  return (
    <section className="todo-stats">
      <h2>Progress</h2>

      <p>
        <strong>{total}</strong>
        <span>Total</span>
      </p>

      <p>
        <strong>{completed}</strong>
        <span>Completed</span>
      </p>

      <p>
        <strong>{remaining}</strong>
        <span>Remaining</span>
      </p>
    </section>
  );
}
