import styles from './InputTodo.module.css';

const InputTodo = (props) => {
  const { inputText, setInputText, addTodo } = props;
  return (
    <div className={styles.input_area}>
      <input
        type="text"
        placeholder="input Todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default InputTodo;
