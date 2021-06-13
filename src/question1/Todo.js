

// list of todos
function Todo(props) {
    return (
      <div className="todo">
        <span className="todoText">{props.todo.text}</span>
          <button onClick={() => props.removeTodo(props.index)} className="deletebtn">delete</button>
      </div>
    );
  }

  export default Todo;