import React, { useState, useEffect } from 'react'
import { Menulink } from '../constants/MenuLink'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState('bg-transparent');
  const [activeLink, setActiveLink] = useState('Home');


  // scrolll
  useEffect(() =>{
    const handleScroll = () =>{
      if (window.scrollY > 50) {
        setHasScrolled('bg-slate-900 opacity-80  shadow-lg')
      }else{
        setHasScrolled('bg-black/30')
      }

    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[activeLink])

  return (
    <nav className={`fixed ${hasScrolled}  top-0 right-0 left-0 z-50 transition-all  px-6 py-4  w-full  mx-auto`} >
      <div className="mx-16 flex justify-between items-center">
        <Link to='/' className='text-3xl text-orange-600 font-bold tracking-tighter uppercase font-sans'>MovieStream </Link>
        <div className='flex flex-wrap '>
          {Menulink.map((link) => (
            // <div className="flex hover:bg-indigo-800 px-4 text-white rounded-md py-2 hover:text-white cursor-pointer" key={index}>
              <a  
              className={`px-4 ${link.key === activeLink? "bg-orange-500" : "bg-transparent"} rounded-md py-2 text-white cursor-pointer hover:bg-orange-600 transition duration-300 `} 
                key={link.key}    
                // rel="noopener noreferrer" 
                // title={link.label}
                href={link.path}
                onClick={()=> setActiveLink(link.path)}
              >
                {link.label}
              </a>
            // </div>

            // <div className="flex justify-center w-full flex-wrap gap-4  mx-auto">
            //         { tabs.map((tab) => (
            //             <span 
            //                 key={tab.key} 
            //                 className={`px-4 ${tab.key === activeTab? "bg-orange-500" : "bg-slate-500"} rounded-md py-2 text-white cursor-pointer hover:bg-orange-600 transition duration-300 `} 
            //                 onClick={() => setActiveTab(tab.key)}
            //             >
            //                 {tab.label}
            //             </span>
            //         ))}
            //     </div>
          ))}
        </div>
      </div>
    </nav>
    
    
  )
}

export default Navbar
