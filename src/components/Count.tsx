import styles from "./Count.module.css";

interface CountProps {
  count: number;
}

export function Count({ count }: CountProps) {
  return (
    <div className={styles.count}>
      <span>Tarefas criadas</span>
      <p>{String(count)}</p>
    </div>
  );
}
