import React, { useState, useEffect } from 'react'
import { Menulink } from '../constants/MenuLink'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState('bg-transparent');


  // scrolll
  useEffect(() =>{
    const handleScroll = () =>{
      if (window.scrollY > 50) {
        setHasScrolled('bg-black opacity-80  shadow-lg')
      }else{
        setHasScrolled('bg-black/30')
      }

    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  return (
    <nav className={`fixed ${hasScrolled}  top-0 right-0 left-0 z-50 transition-all  px-6 py-4  w-full  mx-auto`} >
      <div className="mx-24 flex justify-between items-center">
        <Link to='/' className='text-2xl text-indigo-600 font-bold'>MovieStream </Link>
        <div className='flex '>
          {Menulink.map((link, index) => (
            <div className="flex hover:bg-indigo-800 px-4 text-white rounded-md py-2 hover:text-white cursor-pointer" key={index}>
              <a  href={link.path}>{link.label}</a>
            </div>
          ))}
        </div>
      </div>
    </nav>
    
    
  )
}

export default Navbar
