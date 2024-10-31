import { useState } from 'react'
import './App.css'
import IncrementButton from './components/IncrementButton';

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world!</h1>
      <p>Count: {count}</p>
      <IncrementButton addOne={addOne} /> {/* Passing in a function as a PROP for child component */}
    </>
  );

  function addOne() {
    setCount(count + 1)
  }
};

export default App;