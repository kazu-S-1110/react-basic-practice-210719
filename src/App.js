import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
  const [inCompleteTodos, setInCompleteTodos] = useState(['todo1', 'todo2']);
  const [completeTodos, setCompleteTodos] = useState(['todo3']);
  const [inputText, setInputText] = useState('');
  const addTodo = () => {
    if (inputText !== '') {
      setInCompleteTodos([...inCompleteTodos, inputText], setInputText(''));
    }
  };
  const deleteTodo = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  };
  const finishTodo = (index, todo) => {
    deleteTodo(index);
    setCompleteTodos([...completeTodos, todo]);
    //講習での書き方（参考）
    // const newIncompleteTodos = [...inCompleteTodos];
    // const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
  };

  return (
    <>
      <div className={styles.input_area}>
        <input
          type="text"
          placeholder="input Todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></input>
        <button onClick={addTodo}>Add</button>
      </div>
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
      <div className={styles.complete_area}>
        <p className={styles.title}>CompleteList</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className={styles.list_row}>
                <div>{todo}</div>
                <button>Back</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
