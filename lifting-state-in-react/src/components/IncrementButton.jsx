// src/components/IncrementButton.jsx

const IncrementButton = (props) => { /* Given multiple functions/objects, it may be easier to use the props dot notation */
    return (
      <button onClick={props.addOne}>Increment</button>
    )
  }
  
  export default IncrementButton
  