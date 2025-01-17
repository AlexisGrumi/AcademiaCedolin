import React from 'react'
import logo from '../../assets/logo.svg'

function Navbar() {
  return (
    <nav className="flex justify-center">
      <div className="flex flex-row items-center justify-between w-8/12">
        {/* Logo con tamaño fijo */}
        <img
          alt="logo"
          src={logo}
          className="w-64 h-auto" /* Tamaño fijo */
        />

        {/* Opciones del menú */}
        <ul className="flex flex-row gap-6 mr-12 font-medium	">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Practica</li>
          <li className="hover:underline cursor-pointer">Mide tu nivel</li>
          <li className="hover:underline cursor-pointer">Tienda</li>
          <li className="hover:underline cursor-pointer">AboutUs</li>
        </ul>

        {/* Botón de login */}
          <button className='text-white bg-black w-24 text-center h-fit p-2 rounded-3xl shadow-3xl hover:bg-[#F3F3F3] hover:text-black'>Login</button>
        
      </div>
    </nav>
  )
}

export default Navbar