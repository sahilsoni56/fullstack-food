import React from 'react'
import ReactDOM from 'react-dom/client'
const LazyHome = React.lazy(()=> import("./screens/Home.jsx"))
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import Login from './screens/Login.jsx'
import Layout from './layout/layout.jsx'
import Signup from './screens/Signup.jsx'
import Cart from './screens/Cart.jsx'
import Loader from './loader/Loader.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children : [
      {
        path:'',
        element: <React.Suspense fallback = "Loading..." >
          <LazyHome/>
        </React.Suspense>,
      },
      {
        path:'login',
        element: <Login/>,
      },
      {
        path :'signup',
        element : <Signup/>
      },
      {
        path :'cart',
        element : <Cart/>
      },

    ],
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
