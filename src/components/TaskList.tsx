import { useAppSelector } from "../redux/hooks";
import Task from "./Task.tsx";

const TaskList = () => {
  const tasks = useAppSelector((state) => state.task);
  return (
    <ul className="flex flex-col gap-4 overflow-y-scroll min-h-[70%]">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
