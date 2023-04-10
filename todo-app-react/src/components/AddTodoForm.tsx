import styles from "../App.module.css";

type AddTodoFormProps = {
  newTodo: string;
  language: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ newTodo, language, handleInputChange, handleFormSubmit }) => {
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