import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);


  function getPost() {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
      setLoading(false);

  }

  useEffect(() => {
    getPost();
  }, [params.id]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  };

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <p>{post.title}</p>
    </div>
  );
};

export default Post;