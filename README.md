## Muntlig redovisning


https://funet-my.sharepoint.com/:v:/g/personal/3ggyhmu26_dahegh_folkuniversitetet_nu/IQAMDftgNpRdQbcYn9wLkpS9ASQZoZxdsk3qiy-uRfLf9LY

-----------------------------------------------------------------------------------

# 1. State handling

Vi använder state eftersom listan med uppgifter kan förändras när användaren lägger till, markerar eller tar bort en uppgift. Jag använder useState för att lagra alla uppgifter i todos. När en uppgift läggs till, markeras som klar eller tas bort uppdateras state med setTodos. När state ändras renderar React om UI och visar den aktuella listan direkt.

## 2. Immutability

Immutability betyder att vi inte ändrar den befintliga state direkt, utan skapar en ny version av datan. Jag använder ...todos och filter() för att skapa nya arrayer när uppgifter läggs till eller tas bort. Jag använder inte .push() eftersom den ändrar den befintliga arrayen direkt.

### 3. Kodgranskning
Vad är fel med koden?

function addTodo(todos, text) {
  todos.push(text);
  return todos;
}
Koden försöker att lägga till en ny uppgift i listan, men problemet är att push() ändrar den befintliga arrayen direkt. I React ska state inte muteras direkt, utan en ny array ska skapas och användas när state uppdateras.
En bättre lösning:

function addTodo(text) {
  setTodos([...todos, text]);
}

#### 4. Problemlösning och reflektion

Under arbetet har jag stött på problem med bland annat state, props och funktioner. Ett exempel var koden för att ändra status på en uppgift, där jag fick hjälp av ChatGPT att skriva lösningen och sedan bad jag om en fullständig förklaring av koden, till exempel todo.id === id ? { ...todo, done: !todo.done } : todo. Jag ställde frågor för att förstå varför koden fungerar och hur varje del hänger ihop, och testade sedan funktionen själv i applikationen. ChatGPT har varit ett stöd under arbetet, men jag har själv följt koden, ställt frågor och kontrollerat resultatet genom att testa applikationen.