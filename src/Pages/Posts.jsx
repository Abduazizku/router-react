import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../companents/Laoder";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
