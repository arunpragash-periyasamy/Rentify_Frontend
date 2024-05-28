import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './src/App';
import Login from './src/Pages/Login/Login';
import Signup from './src/Pages/SignUp/Signup';
import { Provider } from 'react-redux';
import store from './src/Store/Store';
import Dashboard from './src/Pages/Dashboard/Dashboard';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard/>
            }
        ]
    }, {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>);
