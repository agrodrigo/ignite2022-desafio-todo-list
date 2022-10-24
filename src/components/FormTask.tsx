import styles from "./FormTask.module.css";

import { PlusCircle } from "phosphor-react";
import { Todo } from "../App";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface FormTaskProps {
  handleSetNewTodo: (newTodo: Todo) => void;
}

export function FormTask({ handleSetNewTodo }: FormTaskProps) {
  const [newTodoContentText, setNewTodoContentText] = useState("");

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    const newTodo: Todo = {
      id: uuidv4(),
      isChecked: false,
      content: newTodoContentText,
    };

    handleSetNewTodo(newTodo);
    setNewTodoContentText("");
  }

  function handleNewTodoInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTodoContentText(event.target.value);
  }

  function handleNewTodoInputInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTodoContentEmpty = newTodoContentText.length === 0;

  return (
    <form onSubmit={handleCreateNewTodo} className={styles.formTask}>
      <input
        placeholder="Adicione uma nova tarefa"
        required
        type={"text"}
        onChange={handleNewTodoInputChange}
        onInvalid={handleNewTodoInputInvalid}
        value={newTodoContentText}
      />
      <button type="submit" disabled={isNewTodoContentEmpty}>
        Criar
        <PlusCircle className={styles.plusCircle} weight="bold" />
      </button>
    </form>
  );
}
