type Props = {
  title: string;
};

const TodoItems = ({ title }: Props) => {
  return <li>{title}</li>;
};

export default TodoItems;
