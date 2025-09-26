import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Users from "../Pages/Users";
import Posts from "../Pages/Posts";
import Post from "../Pages/Post";
import Todos from "../Pages/Todos";
import Photos from "../Pages/Photos";
import Albums from "../Pages/Albums";
import Comments from "../Pages/Comments";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "users", element: <Users /> },
      { path: "posts", element: <Posts /> },
      { path: "posts/:id", element: <Post /> },
      { path: "comments", element: <Comments /> },
      { path: "comments/:id", element: <Comment /> },
      { path: "albums", element: <Albums /> },
      { path: "photos", element: <Photos /> },
      { path: "todos", element: <Todos /> },
    ],
  },
]);
