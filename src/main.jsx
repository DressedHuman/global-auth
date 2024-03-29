import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import AuthProvider from './providers/AuthProvider'
import Orders from './components/Orders'
import PrivateRoute from './routes/PrivateRoute'
import Profile from './components/Profile'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders/></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile/></PrivateRoute>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
