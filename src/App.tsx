import { Header } from "./components/Header";
import { FormTask } from "./components/FormTask";

import styles from "./App.module.css";

import "./global.css";
import { Count } from "./components/Count";
import { CountCompleted } from "./components/CountCompleted";
import { Card } from "./components/Card";
import { useState } from "react";
import { ClipboardText } from "phosphor-react";

export interface Todo {
  id: string;
  isChecked: boolean;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSetNewTodo(newTodo: Todo) {
    setTodos([...todos, newTodo]);
  }

  function handleTodoCheck(todo: Todo) {
    const newArrTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return {
          id: item.id,
          isChecked: !item.isChecked,
          content: item.content,
        };
      } else {
        return item;
      }
    });

    setTodos(newArrTodos);
  }

  function handleTodosCompleted() {
    const todosCompleted = todos.filter((todo) => {
      return todo.isChecked == true;
    });

    return todosCompleted.length;
  }

  function handleDeleteTodo(id: string) {
    const newTodoArr = todos.filter((todo) => todo.id !== id);

    setTodos(newTodoArr);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <FormTask handleSetNewTodo={handleSetNewTodo} />
        <div className={styles.todoPanel}>
          <Count count={todos.length} />
          <CountCompleted
            completed={handleTodosCompleted()}
            total={todos.length}
          />
        </div>

        <div>
          {todos.length > 0 && (
            <>
              {todos.map((todo) => {
                return (
                  <Card
                    key={todo.id}
                    id={todo.id}
                    isChecked={todo.isChecked}
                    content={todo.content}
                    handleTodoCheck={handleTodoCheck}
                    handleDeleteTodo={handleDeleteTodo}
                  />
                );
              })}
            </>
          )}

          {todos.length === 0 && (
            <div className={styles.withoutTodos}>
              <ClipboardText size={56} className={styles.clipboard} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
