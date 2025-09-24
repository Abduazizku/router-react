import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((json) => {
        setAlbums(json);
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
        {albums.map((a) => (
          <li key={a.id}>
            <Link to={`/albums/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
