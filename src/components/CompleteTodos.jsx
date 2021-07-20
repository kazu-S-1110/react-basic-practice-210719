import styles from './CompleteTodos.module.css';

const CompleteTodos = ({ completeTodos, backTodo }) => {
  return (
    <div className={styles.complete_area}>
      <p className={styles.title}>CompleteList</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo} className={styles.list_row}>
              <div>{todo}</div>
              <button onClick={() => backTodo(index, todo)}>Back</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodos;
