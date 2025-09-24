
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Photos = () => {
  const [posts, setPosts] = useState([]);

  function getAllPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }

  useEffect(() => {
    getAllPosts();
  }, []);

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

export default Photos;