import { useState } from "react";

import { TodoForm } from "./components/TodoForm";
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

  //  Here goes the toggle function
  function toggleDone(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }
  //  Here goes the remove function
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="app">
      <h1>EXAM ToDo List</h1>
      <h4>javaScript + React</h4>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleDone} onRemove={removeTodo} />
      <TodoStats todos={todos} />
    </main>
  );
}

export default App;
