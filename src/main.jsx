import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './index.css'

// componentts
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/movies' element={<Movies/>}/> */}
      
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
