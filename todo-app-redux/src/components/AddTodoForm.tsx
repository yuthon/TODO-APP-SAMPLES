import styles from "../App.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../todoSlice";
import { RootState } from "../store";

export const AddTodoForm = () => {
  const language = useSelector((state: RootState) => state.language.language);
  const [newTodo, setNewTodo] = useState<string>("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    dispatch(addTodo(newTodo));
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