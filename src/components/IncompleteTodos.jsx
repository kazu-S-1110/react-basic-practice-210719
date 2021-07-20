import styles from './IncompleteTodos.module.css';

const IncompleteTodos = ({ inCompleteTodos, finishTodo, deleteTodo }) => {
  return (
    <div className={styles.incomplete_area}>
      <p className={styles.title}>Non-completeList</p>
      <ul>
        {inCompleteTodos.map((todo, index) => {
          return (
            <li key={todo} className={styles.list_row}>
              <div>{todo}</div>
              <button onClick={() => finishTodo(index, todo)}>Finish</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteTodos;
