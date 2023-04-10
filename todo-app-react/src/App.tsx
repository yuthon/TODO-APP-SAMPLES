import React, { useState } from "react";
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
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [language, setLanguage] = useState<string>("en");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setTodos(newTodos);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en");
  };
  
  return (
    <div className={styles.appContainer}>
      <LanguageSwitcher language={language} toggleLanguage={toggleLanguage} />
      <AddTodoForm newTodo={newTodo} language={language} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};
  
  export default App;
  