import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/SignUp/Signup";
import App from "../../App"
import AddHouse from "../../Components/AddHouse/AddHouse";
import AddHouseTable from "../../Components/AddHouse/AddHouseTable";
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
                    path: "/page",
                    element: <AddHouse />,
              }, {
                path: "/table",
                element:<AddHouseTable/>
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
]);


export default router;