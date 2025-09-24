import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((json) => {
        setComments(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>
            <Link to={`/comments/${c.id}`}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
