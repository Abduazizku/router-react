
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  function getAllAlbums() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  }

  useEffect(() => {
    getAllAlbums();
  }, []);

  return (
    <div>

      <Link to="/">Back to Home</Link>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;