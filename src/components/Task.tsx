import React from "react";
import clsx from "clsx";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import type { Task } from "../types/TaskType";
import { useAppDispatch } from "../redux/hooks";
import { changeCheck, changeDelete } from "../redux/taskSlice";

type TaskProp = {
  task: Task;
};

const Task = ({ task }: TaskProp) => {
  const dispatch = useAppDispatch();

  function handleCheck(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(changeCheck(task));
  }

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(changeDelete(task));
  }

  return (
    <>
      {!task.isDeleted && (
        <li className="text-white bg-[#222] px-3 py-2.5 text-xl flex justify-center items-center gap-3">
          <button onClick={handleCheck} className="cursor-pointer">
            {task.isChecked ? <FaCheckCircle fill="#4a5565" /> : <FaCircle />}
          </button>

          <p
            className={clsx(
              "w-[150px] max-w-[150px] overflow-x-hidden",
              task.isChecked && "line-through opacity-50"
            )}
          >
            {task.title}
          </p>

          <span
            className={clsx(
              "text-base opacity-70 ml-auto block",
              task.isChecked && "line-through !opacity-50"
            )}
          >
            {task.createdDate}
          </span>

          <button onClick={handleDelete} className="ml-auto cursor-pointer">
            <MdClose />
          </button>
        </li>
      )}
    </>
  );
};

export default Task;
