import { useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo'

const App = () => {

  const [todos, setTodos] = useState([]);
  /* Array of Todo Strings */

  return (
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo} /> {/* Passes addTodo function DOWNWARDS for use in the NewTodo.jsx */}
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </>
  )

  function addTodo(newTodo) {
    /* THIS is bad practice, do NOT update a state directly. Just replace */
    /* todos.push(newTodo); */
    const updatedTodos = [...todos, newTodo]; /* New array, adds new object to the new array */
    console.log(todos);
    console.log(updatedTodos);
    /* Replace old array with new array */
    setTodos(updatedTodos);
    /* This works too */
    /* setTodos([...todos, newTodo]) */
  }
}

export default App