import { Button } from "../Button/Button";
import styles from "./ToDoItem.module.css";

export function ToDoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {/* jesli done jest false pokaz button, jesli done true to nie pokazuj button */}
      {!done && <Button onClick={onDoneButtonClick}>Done</Button>}
      <Button onClick={onDeleteButtonClick}>Delete</Button>
    </li>
  );
}
