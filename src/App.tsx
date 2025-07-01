import Form from "./components/Form";
import TodoContent from "./components/TodoContent";
import TodoHeader from "./components/TodoHeader";
import { useLocaleStorage } from "./hooks/useLocaleStorage";
import type { Todo } from "./types/Todo";

function App() {
  const [todos, setTodos] = useLocaleStorage<Todo[]>("todo", []);

  return (
    <>
      <div className="container">
        <TodoHeader />
        <TodoContent todos={todos} />
      </div>
      <div className="container">
        <Form setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
