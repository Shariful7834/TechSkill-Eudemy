import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Home from "../pages/Home/Home";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <RightSideNav></RightSideNav>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courseCategory/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
        element: <LeftSideNav></LeftSideNav>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
    ],
  },
]);
