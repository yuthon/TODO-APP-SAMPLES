import { Todo } from "../App";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC<{ todos: Todo[]; toggleTodo: (id: number) => void }> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};