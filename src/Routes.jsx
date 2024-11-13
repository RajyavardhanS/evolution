import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Code from './Code';
import Navbar from './components/Navbar/Navbar';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/code",
      element: (
        <div>
        <Navbar/>
        <Code/>
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <div>
          <App/>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
