import type { Todo } from "../types/Todo";

type Props = {
  todo: Todo;
};

const TodoItems = ({ todo }: Props) => {
  console.log(todo);
  return (
    <li>
      <span>{todo.title}</span>
      <input type="checkbox" />
    </li>
  );
};

export default TodoItems;
