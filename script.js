import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './src/utility/Store/Store';
import router from './src/utility/Routes/Router';
import { ConfigProvider, theme } from 'antd';



ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={{algorithm:theme.darkAlgorithm}}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ConfigProvider>
);
