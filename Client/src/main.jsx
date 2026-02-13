import { createContext, StrictMode, useState, useEffect, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Store from './components/Pages/Store/Store.jsx'
import Navbar from './components/Header/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
// import Homepage from './components/Pages/Homepage/Homepage.jsx'
import Checkout from './components/Pages/Checkout/Checkout.jsx'
import Layout from './components/Layout/Layout.jsx'
import Account from './components/Pages/Account/Account.jsx'
import { NavUser } from './components/nav-user'
import { SidebarProvider } from './components/ui/sidebar'
import Dashboard from './components/Admin/Dashboard/Dashboard.jsx'
import { AuthProvider } from './context/AuthContext'
import NewArrivalsSection from './components/Pages/Homepage/NewArrivalsSection'
import BestSellersSection from './components/Pages/Homepage/BestSellersSection'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetails from './components/Pages/Product/ProductDetails'

// import './components/styles/font-awesome.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <><NewArrivalsSection /><BestSellersSection /></>
      },
      {
        path: '/store',
        element: <Store />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>
      }
    ],
  },
    {
      path: '/dashboard',
      element: <Dashboard/>
    }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>    
    <RouterProvider router={router}/>
    </AuthProvider>
    {/* <App /> */}
  </StrictMode>,
)

