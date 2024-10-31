import { useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo'

const App = () => {

  return (
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo} /> {/* Passes addTodo function DOWNWARDS for use in the NewTodo.jsx */}
    </>
  )

  function addTodo(newTodo) {
    console.log(newTodo)
  }
}

export default App