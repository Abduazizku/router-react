import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Comment = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)  
      .then((response) => response.json())
      .then((json) => setComment(json));
  }, [id]);


  return (
    <div>
      <Link to="/">Back to Home</Link>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
