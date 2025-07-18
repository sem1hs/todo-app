import { decrement, increment } from "./redux/appSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { num } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  function handleDec(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    dispatch(decrement(1));
  }

  function handleInc(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    dispatch(increment(1));
  }

  return (
    <div className="w-max mx-auto mt-36 flex gap-10 text-white text-3xl items-center">
      <button
        onClick={handleDec}
        className="cursor-pointer px-10 py-3 bg-[#333] block rounded-2xl"
      >
        Azalt
      </button>
      <h1>{num}</h1>
      <button
        onClick={handleInc}
        className="cursor-pointer px-10 py-3 bg-[#333] block rounded-2xl"
      >
        Arttır
      </button>
    </div>
  );
}

export default App;
