import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../src/pages/homePage.jsx';
import AlbumPage from '../src/pages/albumPage.jsx';
import { createRoot } from 'react-dom/client';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/album/:id',
        element: <AlbumPage />,
      },
    ],
  },
]);

let root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);






// import { StrictMode } from 'react'
// import ReactDOM from 'react-dom';
// // import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import HomePage from '../src/pages/homePage.jsx';
// import AlbumPage from '../src/pages/albumPage.jsx';




// let router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <HomePage />,
//       },
//       {
//         path: '/album/',
//         element: <AlbumPage />,
//       },
//     ],
//   },
// ]);

// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<RouterProvider router={router} />)  

