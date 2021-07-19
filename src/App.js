import styles from './App.module.css';

export const App = () => {
  return (
    <>
      <div className={styles.input_area}>
        <input type="text" placeholder="input Todo"></input>
        <button>Add</button>
      </div>
      <div className={styles.incomplete_area}>
        <p className={styles.title}>Non-completeList</p>
        <ul>
          <li className={styles.list_row}>
            <div>todo1</div>
            <button>Finish</button>
            <button>Delete</button>
          </li>
          <li className={styles.list_row}>
            <div>todo2</div>
            <button>Finish</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
      <div className={styles.complete_area}>
        <p className={styles.title}>
          CompleteList
          <ul>
            <li className={styles.list_row}>
              <div>todo3</div>
              <button>Finish</button>
              <button>Delete</button>
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default App;
