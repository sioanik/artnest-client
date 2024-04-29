import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ProtectedRoute from "./ProtectedRoute";
import AllItems from "../pages/AllItems";
import AddCraft from "../pages/AddCraft";
import MyArtList from "../pages/MyArtList";
import ArtworkDetails from "../components/ArtworkDetails";
import UpdateCraft from "../pages/UpdateCraft";
import AllItemsDetails from "../components/AllItemsDetails";
import CategoryAllItems from "../components/CategoryAllItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/artwork-details/:id',
        element: <ArtworkDetails></ArtworkDetails>,
        loader: () => fetch('http://localhost:5000/crafts')

      },
      {
        path: '/all-items',
        element: <AllItems></AllItems>,
        loader: () => fetch('http://localhost:5000/crafts')
      },
      {
        path: '/item-details/:id',
        element: <ProtectedRoute>
          <AllItemsDetails></AllItemsDetails>
        </ProtectedRoute>
      },
      {
        path: '/add-craft',
        element: <ProtectedRoute>
          <AddCraft></AddCraft>
        </ProtectedRoute>
      },
      {
        path: '/update-craft/:id',
        element: <ProtectedRoute>
          <UpdateCraft></UpdateCraft>
        </ProtectedRoute>
      },
      {
        path: '/my-arts',
        element: <ProtectedRoute>
          <MyArtList></MyArtList>
        </ProtectedRoute>
      },
      {
        path: '/category-items/:url',
        element: <CategoryAllItems></CategoryAllItems>
      },
      // {
      //   path: '/private',
      //   element: <ProtectedRoute>

      //   </ProtectedRoute>
      // },
    ]
  },
]);

export default router