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

  // Receives the text from TodoForm, validates it,
  // creates a new todo object and updates the todos array.
  function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    if (!/[a-zA-ZåäöÅÄÖ]/.test(trimmed)) return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      done: false,
    };
    // Checking the ID and data of each newly created todo.
    // console.log("in console, New Todo ID:", newTodo);
    setTodos([...todos, newTodo]);
  }

  // Finds the clicked todo by ID and flips its done status.
  // map() creates a new array while keeping the other todos unchanged.
  function toggleDone(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  // Removes the clicked todo by ID.
  // filter() creates a new array containing only the remaining todos.
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  // Displaying all todos (ID, text, done) in the browser console.
  // console.table(todos);

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
