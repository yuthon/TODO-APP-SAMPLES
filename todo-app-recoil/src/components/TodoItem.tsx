import { Todo } from "../App";
import { todoListState } from "../RecoilAtoms";
import { useRecoilState } from "recoil";

export const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setTodos(newTodos);
  };

  return (
    <li onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
    </li>
  );
};