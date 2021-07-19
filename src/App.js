import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
  const [inCompleteTodos, setInCompleteTodos] = useState(['todo1', 'todo2']);
  const [completeTodos, setCompleteTodos] = useState(['todo3']);
  const [inputText, setInputText] = useState('');

  return (
    <>
      <div className={styles.input_area}>
        <input
          type="text"
          placeholder="input Todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></input>
        <button
          onClick={
            inputText !== ''
              ? () =>
                  setInCompleteTodos(
                    [...inCompleteTodos, inputText],
                    setInputText('')
                  )
              : ''
          }
        >
          Add
        </button>
      </div>
      <div className={styles.incomplete_area}>
        <p className={styles.title}>Non-completeList</p>
        <ul>
          {inCompleteTodos.map((todo) => {
            return (
              <li key={todo} className={styles.list_row}>
                <div>{todo}</div>
                <button>Finish</button>
                <button>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.complete_area}>
        <p className={styles.title}>CompleteList</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className={styles.list_row}>
                <div>{todo}</div>
                <button>Finish</button>
                <button>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
