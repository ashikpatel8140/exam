
import { useState} from 'react';
import './App.css';
import TodoForm from './question1/TodoForm';
import Todo from './question1/Todo';
import UserForm from './question2/UserForm';


function App() {
  const [todos, setTodos] = useState([]);
  const [page,setPage] =  useState("");
  const [user,setUser] = useState([]);
  const [isEmpty,setEmpty] = useState();
  var s = [];

  //for todos
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // for remove todos
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // for set page
  const inputs = text => {
    setPage(text);
  };

  //get user
  const getData = data =>{
    console.log(data);
    s = data;
    if(s){
      setEmpty(true);
      setUser(s);
    }else{
        setEmpty(false);
    }
  }
  //for clear user
  const clear = ()=>{
    setUser([]);
  }

  
  
  return (
    <div className="app">

      <div className="q1">
         <h1>TODO : Q-1</h1>
          <div className="todo-list">
            
              <div>
                <TodoForm addTodo={addTodo} />

              </div>
            
                <div>
                    {todos.map((todo, index) => (
                      <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        removeTodo={removeTodo}
                      />
                    ))}
                </div>
            </div>
      </div>
     
      <div className="q2">
          <h1>USERS : Q-2</h1>
          <div className="forms">
              <div>
                <UserForm inputs={inputs}  getData={getData}/>
              </div> 
          </div> 
          <table align="center">
            
                { isEmpty  && user.length > 0?
                  <div>
                    <tr>
                      <th>id</th>
                      <th>email</th>
                      <th>first_name</th>
                      <th>last_name</th>
                      <th>image</th>
                    </tr>
                      { user.map(item=>{ return <tr key={item.id}>
                      <td key={item.id}>{item.id}</td>
                      <td key={item.id}>{item.email}</td> 
                      <td key={item.id}>{item.first_name}</td> 
                      <td key={item.id}>{item.last_name}</td> 
                      <td key={item.id}><img src={item.avatar} alt="image"/></td>  
                      </tr>})}
                      <tr><button onClick={()=>{clear()}} className="deletebtn"> Clear</button></tr>
                  </div> 
                  : 
                  <div><h1>Empty</h1></div>
                }
            
          </table>
  
       </div>                       
    </div>

    
  );
}

export default App;
