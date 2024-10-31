// src/components/NewTodo.jsx
import { useState } from 'react'

/* Now we will pass a function UPWARD into the parent (App.jsx) */

const NewTodo = (props) => { 

    /* Given multiple functions/objects, it may be easier to use the props dot notation */

    const [newTodo, setNewTodo] = useState('')
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Todo: </label>
        <input 
        id="todoInput" 
        type="text" 
        name="todo" 
        onChange={handleChange}
        value={newTodo}/>
        <button type="submit">Create to-do</button>
      </form>
    )

    function handleSubmit(event) {
        event.preventDefault()
        props.addTodo(newTodo) /* Calls a function that was passed from the parent (App.jsx)  */
        setNewTodo('') /* Clears input field */
      }

    /* Updates form field */
    function handleChange(event) {
        setNewTodo(event.target.value)
    }
  }
  
  export default NewTodo
  