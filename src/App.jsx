import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './page/Home';
import MainLayout from './layout/MainLayout';
import About from './page/About';
import Contact from './page/Contact';
import Portfolio from './page/Porfolio/Portfolio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {  index:true, element: <Home />},
     
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
    ],
  },


]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
