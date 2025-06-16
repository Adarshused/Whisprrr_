import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import UserSignUp from './Components/User/UserSignUp.jsx'
import UserSignIn from './Components/User/UserSignIn.jsx'
import Forgetpass from './Components/User/Forgetpass.jsx'
import ResetPassword from './Components/User/ResetPassword.jsx'
import Dashboardpage from './Components/Dashboard/Dashboardpage.jsx'
import Settings from './Components/Settings/Settings.jsx'
import {store} from './app/store.js'
import Profile from './Components/Settings/Profile.jsx'
import Connection from './Components/Connections/Connectionspage.jsx'
import ConnectionPortfolio from './Components/Connections/ConnectionPortfolio.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Hero/>
      },
      {
        path:"/signup",
        element:<UserSignUp/>
      },
      {
        path:"/signin",
        element:<UserSignIn/>
      },
      {
        path:"/forgetpass",
        element:<Forgetpass/>
      },
      {
        path:"/resetpass",
        element:<ResetPassword/>
      },

      {
        path:"/footer",
        element:<Footer/>
      },
      {
        path:"dashboardpage",
        element:<Dashboardpage/>
      },
      {
        path:"settingpage",
        element:<Settings/>
      },
      {
        path:"profilepage",
        element:<Profile/>
      },
      {
        path:"connectionspage",
        element:<Connection/>
      },
      {
        path:"connectionportfolio",
        element:<ConnectionPortfolio/>
      }
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={router}/>
  </Provider>
  
)
