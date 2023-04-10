import { todoListState } from "../RecoilAtoms";
import { TodoItem } from "./TodoItem";
import { useRecoilValue } from "recoil";

export const TodoList = () => {
  const todos = useRecoilValue(todoListState);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};