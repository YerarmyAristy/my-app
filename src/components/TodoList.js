import React, { useState } from 'react'; 

const TodoList = () => { 
  const [todos, setTodos] = useState([]); 
  const [input, setInput] = useState(''); 
  const addTodo = () => { 
    if (input.trim()) { 
      setTodos([...todos, input.trim()]); 
      setInput(''); 
    } 
  }; 
  const removeTodo = (index) => { 
    setTodos(todos.filter((_, i) => i !== index)); 
  }; 
  return ( 
    <div> 
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      /> 
      <button onClick={addTodo}>Add Todo</button> 
      <ul> 
        {todos.map((todo, index) => ( 
          <li key={index}> 
            {todo} <button onClick={() => removeTodo(index)}>Remove</button> 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
}; 

export default TodoList; 

 