export function TodoForm() {
  return <p> Todo Form </p>;
}

// Default export
// export default TodoForm;
// => I export one default value from this file.
//    When importing it, I do NOT need curly braces:
//    import TodoForm from "./components/TodoForm";

/* function TodoForm() {
  return <p>Todo Form</p>;
}

export default TodoForm; */

//////////////////// VS ////////////////////

// Named export
// export function TodoForm() { return <p>Todo Form</p>; }
// => I export this function by its name: TodoForm.
//    When importing it, I use the SAME name inside curly braces:
//    import { TodoForm } from "./components/TodoForm";
