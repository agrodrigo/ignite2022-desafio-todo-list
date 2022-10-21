import { Header } from "./components/Header";
import { FormTask } from "./components/FormTask";

import styles from "./App.module.css";

import "./global.css";
import { Count } from "./components/Count";
import { CountCompleted } from "./components/CountCompleted";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <FormTask />
        <div className={styles.todoPanel}>
          <Count count={3} />
          <CountCompleted completed={1} total={3} />
        </div>
      </div>
    </div>
  );
}

export default App;
