import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './HouseOwners/utility/Store/Store';
import router from './Routes/Router';
import { ConfigProvider, theme } from 'antd';
import taIN from "antd/locale/ta_IN";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
    }}
  >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ConfigProvider>
);
