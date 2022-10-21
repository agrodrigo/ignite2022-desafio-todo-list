import styles from "./CountCompleted.module.css";

interface CountCompletedProps {
  total: number;
  completed: number;
}

export function CountCompleted({ total, completed }: CountCompletedProps) {
  return (
    <div className={styles.countCompleted}>
      <span>Concluídas</span>
      <p>
        {String(completed)} de {total}
      </p>
    </div>
  );
}
