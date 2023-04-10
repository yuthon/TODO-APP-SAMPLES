import React from "react";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";
import styles from "./App.module.css";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <LanguageSwitcher />
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;
