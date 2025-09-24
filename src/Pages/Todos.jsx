
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  function getAllTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div>

      <Link to="/">Back to Home</Link>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;