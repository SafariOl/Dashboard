import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Grades from './components/Grades';
import Schedule from './components/Schedule';
import Messages from './components/Messages';
import Settings from './components/Settings';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <Home />},
      { path: '/grades', element: <Grades /> },
      { path: '/schedule', element: <Schedule /> },
      { path: '/messages', element: <Messages /> },
      { path: '/settings', element: <Settings /> },
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

