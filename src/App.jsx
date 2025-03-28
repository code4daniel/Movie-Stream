
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        {/* <Movies/> */}
        <Outlet/>
      </div>
    </>
  )
}

export default App
