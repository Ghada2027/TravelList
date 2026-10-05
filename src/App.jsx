import { useState } from "react";
import "./App.css";

function TodoInput({ text, setText, addTodo }) {
  return (
    <section>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Skriv en ny uppgift"
      />
      <button type="button" onClick={addTodo}>
        Lägg till
      </button>
    </section>
  );
}

function TodoItem({ todo, toggleDone, removeTodo }) {
  return (
    <li className="todo-item">
      <button type="button" onClick={() => toggleDone(todo.id)}>
        {todo.done ? "Oklar" : "Klar"}
      </button>

      <span className={todo.done ? "completed" : ""}>
        {todo.text}
      </span>

      <button type="button" onClick={() => removeTodo(todo.id)}>
        Ta bort
      </button>
    </li>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Packa passet", done: false },
    { id: 2, text: "Boka hotell", done: false },
    { id: 3, text: "Köpa reseförsäkring", done: false },
    { id: 4, text: "Kontrollera flygbiljetter", done: false },
  ]);

  const [text, setText] = useState("");

  function addTodo() {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: trimmed, done: false },
    ]);
    setText("");
  }

  function toggleDone(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo)
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main>
      <h1>Travel List</h1>

      <TodoInput
        text={text}
        setText={setText}
        addTodo={addTodo}
      />

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleDone={toggleDone}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
