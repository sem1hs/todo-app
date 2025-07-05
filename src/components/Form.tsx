import { useState } from "react";
import type { Todo } from "../types/Todo";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Form = ({ setTodos }: Props) => {
  const [formData, setFormData] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const todoObj: Todo = {
      id: Date.now(),
      title: formData,
      status: false,
    };

    setTodos((prevTodos) => [...prevTodos, todoObj]);
    setFormData("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setFormData(e.currentTarget.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-header">
        <h1>Ne eklemek istersiniz ?</h1>
        <hr />
      </div>
      <div className="form-content">
        <input
          type="text"
          className="formInput"
          value={formData}
          onChange={handleChange}
        />
      </div>
      <button className="formBtn">Ekle</button>
    </form>
  );
};

export default Form;
