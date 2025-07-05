import type { Todo } from "../types/Todo";
import TodoItems from "./TodoItems";

type Props = {
  todos: Todo[];
};

const TodoContent = ({ todos }: Props) => {
  return (
    <div className="todo-content">
      <ul>
        {todos.map((todo) => (
          <TodoItems key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoContent;
