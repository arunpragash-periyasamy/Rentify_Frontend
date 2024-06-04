import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../HouseOwners/Pages/Dashboard/Dashboard";
import Login from "../HouseOwners/Pages/Login/Login";
import Signup from "../HouseOwners/Pages/SignUp/Signup";
import App from "../App"
import AddHouse from "../HouseOwners/Components/AddHouse/AddHouse";
import CardList from "../Tenants/Components/Cards/CardList";
import HouseDetails from "../HouseOwners/Components/HouseDetails/HouseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
            element: <Dashboard />,
            children: [
                {
                    path: "/house",
                    element: <AddHouse />,
              }, {
                path: "/table",
                element:<HouseDetails/>
            }
        ]
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/test",
    element: <CardList />,
  }
]);


export default router;