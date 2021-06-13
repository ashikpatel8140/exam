import { useState} from 'react';


// todos form
function TodoForm(props) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      props.addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }


  export  default TodoForm;