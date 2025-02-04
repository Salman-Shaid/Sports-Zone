import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import AllEquipment from "../pages/AllEquipment";
import AddEquipments from "../pages/AddEquipments";
import MyEquipments from "../pages/MyEquipments";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ViewDetails from "../pages/ViewDetails";
import UpdateEquipment from "../pages/UpdateEquipment";
import CategoryPage from "../components/CategoryPage";
import PrivateRoute from "../components/PrivateRoute";
import NotFoundPage from "../pages/NotFoundPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allEquipments",
        element: <AllEquipment />,
        loader: () => fetch("https://sports-zone-a10-server.vercel.app/equipment"),
      },
      {
        path: "/addEquipments",
        element: (<PrivateRoute>
          <AddEquipments />
        </PrivateRoute>),
      },
      {
        path: "/myEquipments/",
        element: (<PrivateRoute>
          <MyEquipments />
        </PrivateRoute>),
      },
      {
        path: "/equipment/:id",
        element: (<PrivateRoute>
          <ViewDetails />
        </PrivateRoute>),
        loader: ({ params }) =>
          fetch(`https://sports-zone-a10-server.vercel.app/equipment/${params.id}`),
      },
      {
        path: "/category/:categoryName",
        element: <CategoryPage />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://sports-zone-a10-server.vercel.app/equipment/?category=${params.categoryName}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch category data");
            }
            return response.json(); // Return the JSON data
          } catch (error) {
            throw new Response(error.message, { status: 500 });
          }
        },
      },
      
      
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/update/:id",
        element: (<PrivateRoute>
          <UpdateEquipment />
        </PrivateRoute>),
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,

      },
    ],
  },
]);

export default Router;
