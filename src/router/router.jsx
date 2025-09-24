import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Posts from "../Pages/Posts";
import Post from "../Pages/Post";
import Comments from "../Pages/Commments";
import Albums from "../pages/Albums";
import Photos from "../pages/Photos";
import Users from "../Pages/Users";
import Todos from "../pages/Todos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/comments/:id",
        element: <Camment />,
      },
      {
        path: "/albums",
        element: <Albums />
      },
      {
        path: "/photos",
        element: <Photos />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      
    ],
  },
]);