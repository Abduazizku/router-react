
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();

  const [post, setPost] = useState([]);

  function getPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }

  useEffect(() => {
    getPost();
  }, [params.id]);

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <p>{post.title}</p>
    </div>
  );
};

export default Post;