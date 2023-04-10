import styles from "../App.module.css";
import { useState } from "react";
import { languageState, todoListState } from "../RecoilAtoms";
import { Todo } from "../App";
import { useRecoilValue, useRecoilState } from "recoil"

export const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useRecoilState(todoListState);
  const language = useRecoilValue(languageState);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
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

  const buttonText = language === "en" ? "Add Todo" : "Todoを追加";

  return (
    <form onSubmit={handleFormSubmit} className={styles.formContainer}>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button type="submit" className={styles.addButton}>
        {buttonText}
      </button>
    </form>
  );
};