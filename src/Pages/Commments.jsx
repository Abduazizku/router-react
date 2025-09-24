
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Comments = () => {
  const [camments, setCamments] = useState([]);

  function getAllCamments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setCamments(json));
  }

  useEffect(() => {
    getAllCamments();
  }, []);

  return (
    <div>

      <Link to="/">Back to Home</Link>
      <ul>
        {camments.map((camments) => (
          <li key={camments.id}>
            <Link to={`/comments/${camments.id}`}>{camments.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;