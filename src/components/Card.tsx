import { Todo } from "../App";
import styles from "./Card.module.css";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";

interface CardProps {
  id: string;
  isChecked: boolean;
  content: string;
  handleTodoCheck: (todo: Todo) => void;
  handleDeleteTodo: (id: string) => void;
}

export function Card({
  id,
  isChecked,
  content,
  handleTodoCheck,
  handleDeleteTodo,
}: CardProps) {
  function handleControlCheckTodo() {
    const todoChecked = {
      id: id,
      isChecked: true,
      content: content,
    };

    handleTodoCheck(todoChecked);
  }

  function handleControlDeleteTodo() {
    handleDeleteTodo(id);
  }

  return (
    <div
      className={`${styles.todoCard} ${isChecked && styles.todoCardChecked}`}
    >
      <Checkbox.Root
        checked={isChecked}
        onCheckedChange={() => handleControlCheckTodo()}
        className={styles.todoCardCheckbox}
      >
        <Checkbox.Indicator asChild>
          <Check weight="bold" className={styles.todoCardCheckboxCheckIcon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p>{content}</p>
      <button
        onClick={() => handleControlDeleteTodo()}
        className={styles.deleteButton}
      >
        <Trash size={18} />
      </button>
    </div>
  );
}
