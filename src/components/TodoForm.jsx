import { useState } from "react";

export function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAdd(text);
    setText("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={35}
        placeholder="Add your new to do here..."
      />

      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
}
