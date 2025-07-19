import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import type { Task } from "../types/TaskType";
import { addTask } from "../redux/taskSlice";

const AddTodo = () => {
  const [formValue, setFormValue] = useState<string>("");
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formValue.length) return;

    const task: Task = {
      id: Date.now(),
      createdDate: new Date().toLocaleString().slice(0, -3),
      isChecked: false,
      isDeleted: false,
      title: formValue,
    };

    dispatch(addTask(task));
    setFormValue("");
  }
  return (
    <form className="relative w-[400px] mb-3" onSubmit={handleSubmit}>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          setFormValue(e.target.value);
        }}
        value={formValue}
        className="w-[350px] text-xl border-none bg-[#222] text-white px-4 py-3 rounded-4xl focus:outline-0"
        type="text"
        placeholder="Görevinizi ekleyin..."
      />
      <button className="absolute right-5 text-white bg-gray-600 px-4 py-3 text-xl rounded-4xl min-w-[150px] cursor-pointer">
        Ekle
      </button>
    </form>
  );
};

export default AddTodo;
