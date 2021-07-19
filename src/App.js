export const App = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="input Todo"></input>
        <button>Add</button>
      </div>
      <div>
        <p>Non-completeList</p>
        <ul>
          <li>
            <div>todo1</div>
            <button>Finish</button>
            <button>Delete</button>
          </li>
          <li>
            <div>todo2</div>
            <button>Finish</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
      <div>
        <p>
          CompleteList
          <ul>
            <li>
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
