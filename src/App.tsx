import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="w-max flex flex-col gap-5 mx-auto mt-[10%] bg-[#111] rounded-2xl py-8 px-6 h-[500px] max-h-[500px]">
      <h1 className="font-bold text-3xl text-white">To-Do List 📋</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
