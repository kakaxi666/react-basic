import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppZustand切片模式';
// import store from './store';
// import { Provider } from 'react-redux';
// import {RouterProvider} from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';
// import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  //   {/* <App /> */}
  //   <RouterProvider router={router}></RouterProvider>
  // </Provider>
  <App></App>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
