# EXAM ToDo List

A simple interactive ToDo application built with React, JavaScript, and CSS for my individual frontend examination.

## Video presentation

**Teams recording:** [▶️ Watch my Todo App Presentation (10:40)](https://funet-my.sharepoint.com/:v:/g/personal/3ggyhmu26_thapba_folkuniversitetet_nu/IQCGc0mJ75jEQ7qmDcGMnUISAdNDy-NLcDeIZKLrlNj4WGw?e=6h0dEZ&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

## About the app

The user can add tasks, mark them as done or undone, and delete individual tasks. The app also shows the number of total, completed, and remaining tasks. The list and progress counts update immediately without reloading the page.

Input is checked before a task is added: empty text, spaces only, and text without any letters are rejected.

## Built with

- React
- JavaScript
- CSS
- Vite

## Components

- **`App.jsx`** stores the `todos` state and contains the `addTodo`, `toggleDone`, and `removeTodo` functions.
- **`TodoForm.jsx`** handles the input field and sends the entered text to App through the `onAdd` prop.
- **`TodoList.jsx`** uses `.map()` to create a `TodoItem` component for each todo.
- **`TodoItem.jsx`** displays each task, including its Done/Undo and Delete buttons.
- **`TodoStats.jsx`** calculates and displays Total, Completed, and Remaining.

## 1. Questions about the code

### State management

I use `useState` in `App.jsx` to store my tasks in an array called `todos`. Each task is an object with an `id`, `text`, and `done` value, which tells us whether the task is completed. When I call `setTodos()`, React processes the state update and re-renders the relevant components. This is why the list and progress numbers change on the screen without refreshing the browser.

### Immutability

I should not change an existing state array directly with `.push()` because that keeps the same array reference, so React may not detect the update when it is passed back as state. Instead, I use `setTodos([...todos, newTodo])` to create a new array when adding a task. To remove a task, I use `.filter()` to create a new array without the selected task. For Done/Undo, I use `.map()` and `{ ...todo, done: !todo.done }` to copy the matching todo and change only its `done` value.

## 2. Code review – Code Detective

The example below comes from another developer's solution:

```javascript
function addTodo(todos, text) {
  todos.push(text);
  return todos;
}
```

This function tries to add a task, but `.push()` changes the original array directly. If that array is used as React state and the same array is passed to the state setter, React may not recognize it as a new state value. A better approach is to return a new array using the spread operator:

```javascript
function addTodo(todos, text) {
  return [...todos, text];
}
```

In my own app, a new task is an object containing `id`, `text`, and `done`, and I update the state using `setTodos([...todos, newTodo])`.

## 3. Problem-solving and reflection

When I got stuck, I tried to understand the goal of the function first and then followed the data step by step. I used AI to help me understand the difference between props, parameters, and function calls, especially how `onToggle` is passed from `App.jsx` through `TodoList.jsx` to `TodoItem.jsx`. I also tested `console.log()` and `console.table()` in the browser to inspect my todo objects and check their IDs. By comparing the explanations with my own code and testing the results, I understood the React data flow better.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in the terminal.
