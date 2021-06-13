import axios from "axios";
import { useState } from "react";

function UserForm(props) {
    const [value, setValue] = useState("");
    // call when user submit
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      props.inputs(value);
      getTodos(value);
      setValue("");
    };
    // GET REQUEST
    const getTodos  = (number) => {
    axios
      .get('https://reqres.in/api/users?page='+number)
      .then(res =>{         
         props.getData(res.data.data);
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <input type="submit" value="Submit" />
        
      </form>
    </div>
    
  );
}



  export default UserForm;