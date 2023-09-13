import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import ErrorPage from './error-page'
import Menu from './routes/menu'
import Reservations from './routes/reservations'
import Login from './routes/login'
import OrderOnline from './routes/orderOnline'
import Specials from './routes/specials'
import About from './routes/about'
import CartContextProvider from './components/context/CartContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/reservations',
    element: <Reservations />,
  },
  {
    path: '/orderOnline',
    element: <OrderOnline />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/specials',
    element: <Specials />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
) /* example of the nested routes */

/*  {
    path: 'page/:pageId',
    element: <Page />,
    children: [
      {
        path: '/page/:pageId/post',
        element: <Post />,
      },
    ],
  }, */
