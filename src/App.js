import styles from './App.module.css';
import { useState } from 'react';
import InputTodo from './components/InputTodo';
import IncompleteTodos from './components/IncompleteTodos';

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
  const backTodo = (index, todo) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
    setInCompleteTodos([...inCompleteTodos, todo]);
  };

  return (
    <>
      <InputTodo
        inputText={inputText}
        setInputText={setInputText}
        addTodo={addTodo}
      />
      <IncompleteTodos
        inCompleteTodos={inCompleteTodos}
        finishTodo={finishTodo}
        deleteTodo={deleteTodo}
      />

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
    </>
  );
};

export default App;
