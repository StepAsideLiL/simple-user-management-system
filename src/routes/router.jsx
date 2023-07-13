import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import UserAddPage from "../pages/UserAddPage";
import UserViewPage from "../pages/UserViewPage";
import UserEditPage from "../pages/UserEditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/view-user/:id",
        element: <UserViewPage />,
      },
      {
        path: "/add-user",
        element: <UserAddPage />,
      },
      {
        path: "/edit-user/:id",
        element: <UserEditPage />,
      },
    ],
  },
]);

export default router;
