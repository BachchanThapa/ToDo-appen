import { useState } from "react";

import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoStats } from "./components/TodoStats";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Read Exam Carefully", done: false },
    { id: 2, text: "Make a draft Solution", done: false },
    { id: 3, text: "Meet the requirements", done: false },
  ]);

  function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    if (!/[a-zA-ZåäöÅÄÖ]/.test(trimmed)) return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      done: false,
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <main className="app">
      <h1>My ToDo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
      <TodoItem />
      <TodoStats />
    </main>
  );
}

export default App;
