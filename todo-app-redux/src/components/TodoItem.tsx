import { Todo } from "../App";

export const TodoItem: React.FC<{ todo: Todo; toggleTodo: (id: number) => void }> = ({ todo, toggleTodo }) => {
  return (
    <li onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
    </li>
  );
};