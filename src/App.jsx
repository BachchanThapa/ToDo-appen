import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoStats } from "./components/TodoStats";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>My ToDo List</h1>
      <TodoForm />
      <TodoItem />
      <TodoList />
      <TodoStats />
    </main>
  );
}

export default App;
