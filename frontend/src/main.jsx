import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootswatch/bootstrap.min2.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CategoryScreen from './Screens/CategoryScreen.jsx'
import Home from './Screens/Home.jsx'
import ProductScreen from './Screens/ProductScreen.jsx'
import CartScreen from './Screens/CartScreen.jsx'
import LoginScreen from './Screens/LoginScreen.jsx'
import SignupScreen from './Screens/SignupScreen.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: '/:category',
        element: <CategoryScreen />
      },
      {
        path: '/:category/:id',
        element: <ProductScreen />
      },
      {
        path: '/cart',
        element: <CartScreen />
      },
      {
        path: '/login',
        element: <LoginScreen />
      },
      {
        path: '/signup',
        element: <SignupScreen />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
