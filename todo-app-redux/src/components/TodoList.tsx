import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import { toggleTodo } from "../todoSlice";
import { RootState } from "../store";
import { useDispatch } from "react-redux";

export const TodoList = () => {

  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();
  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id))
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={handleToggle} />
      ))}
    </ul>
  );
};