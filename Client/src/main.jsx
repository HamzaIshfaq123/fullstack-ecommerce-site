import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Store from './components/Pages/Store/Store.jsx'
import Navbar from './components/Header/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Homepage from './components/Pages/Homepage/Homepage.jsx'
import Checkout from './components/Pages/Checkout/Checkout.jsx'
import Layout from './components/Layout/Layout.jsx'
import Account from './components/Pages/Account/Account.jsx'
// import './components/styles/font-awesome.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />
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
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
