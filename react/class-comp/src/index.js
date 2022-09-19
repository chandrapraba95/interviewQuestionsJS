import React from 'react';
import ReactDOM from 'react-dom/client';
//The react-dom/client package provides client-specific methods used for initializing an app on the client. Most of your components should not need to use this module.
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Create a React root for the supplied container and return the root. The root can be used to render a React element into the DOM with render
root.render(
  <BrowserRouter>
  {/* You should have a <BrowserRouter> higher up in the tree. The reason for this is that the <BrowserRouter> provides a history context which is needed at the time the routes are created using useRoutes() */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
