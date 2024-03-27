import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";
import { getSubheading } from "./utils/getSubheading";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);

  const [todos, setTodos] = useState([
    { name: "Pay bills", done: false, id: 1 },
    { name: "Trash", done: true, id: 2 },
  ]);

  function addItem(newTodoname) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { name: newTodoname, done: false, id: Math.random() },
    ]);
    setIsFormShown(false);
  }

  function deleteItem(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function finishItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>To be done!</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        {/* po refresh strony pokaz button */}
        {!isFormShown && (
          <button
            onClick={() => setIsFormShown(true)}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>

      {isFormShown && (
        <Form onFormSubmit={(newTodoname) => addItem(newTodoname)} />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <ToDoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => finishItem(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
