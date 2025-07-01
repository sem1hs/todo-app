import style from "./TodoHeader.module.css";

const TodoHeader = () => {
  return (
    <div className={style.todoHeader}>
      <p className={style.title}>Yapılacaklar</p>
      <hr />
    </div>
  );
};

export default TodoHeader;
