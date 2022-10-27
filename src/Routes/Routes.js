import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../pages/CheckOut/CheckOut";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
          fetch(
            `https://tech-skills-edu-server.vercel.app/course/${params.id}`
          ),
        element: <LeftSideNav></LeftSideNav>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(
            `https://tech-skills-edu-server.vercel.app/course/${params.id}`
          ),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/cartCourse/:id",
        loader: ({ params }) =>
          fetch(
            `https://tech-skills-edu-server.vercel.app/course/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <CheckOut></CheckOut>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
