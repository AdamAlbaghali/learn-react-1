import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import { StudentDetailPage } from "../pages/StudentDetailPage.jsx";
import { StudentSubmitPage } from "../pages/StudentSubmitPage.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: `/student/:id`,
    element: <StudentDetailPage />,
  },
  {
    path: `/student/submit`,
    element: <StudentSubmitPage />,
  },
]);
