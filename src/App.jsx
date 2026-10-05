import { useState } from "react";
import "./App.css";

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

  return (
    <main>
      <h1>Travel List</h1>

      <section>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Skriv en ny uppgift"
        />
        <button type="button" onClick={addTodo}>Lägg till</button>
      </section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button type="button" onClick={() => toggleDone(todo.id)}>
            {todo.done ? "Klar" : "Oklar"}
          </button>
           <span>{todo.text}</span>
            <button type="button">Ta bort</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;