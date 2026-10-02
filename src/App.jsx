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

  return (
    <main>
      <h1>Travel List</h1>

      <form>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Skriv en ny uppgift"
        />
        <button type="button">Lägg till</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            <span>{todo.text}</span>
            <button type="button">Ta bort</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;