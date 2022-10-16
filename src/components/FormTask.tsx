import styles from "./FormTask.module.css";

import { PlusCircle } from "phosphor-react";

export function FormTask() {
  return (
    <form className={styles.formTask}>
      <input placeholder="Adicione uma nova tarefa" required />
      <button type="submit">
        Criar
        <PlusCircle className={styles.plusCircle} weight="bold" />
      </button>
    </form>
  );
}
