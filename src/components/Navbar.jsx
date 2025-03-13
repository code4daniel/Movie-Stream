import React from 'react'
import { Menulink } from '../constants/MenuLink'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed  flex justify-between top-0 right-0 left-0 z-50 transition-all  px-6 py-4 items-center mx-auto'>
      <Link to='/' className='text-2xl text-indigo-600'>MovieStream </Link>
      <nav className='flex '>
        {Menulink.map((link, index) => (
          <div className="flex hover:bg-indigo-800 px-4 rounded-md py-2 hover:text-white" key={index}>
            <Link  to={link.path}>{link.label}</Link>
          </div>
        ))}
      </nav>
    </div>
    
    
  )
}

export default Navbar
