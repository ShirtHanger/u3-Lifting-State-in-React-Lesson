// src/components/TodoList.jsx

const TodoList = (props) => {

    /* const tempTodos = ['first', 'second', 'third']; */
    /* That was just to verify it worked... */

    return (
      <ul>
        {props.todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    );
  };
  
  export default TodoList;
  