import React from 'react'
import './Header.component.css'

export default function Header() {
  return (
    <>
      <div className='header'>
        <div className='icon' />
        <div className='menu'>
          <div className='menu-item'>
            Inicio
          </div>
          <div className='menu-item bg-blue-400'>
            Planes y horarios
          </div>
          <div className='menu-item'>
            Ubicación
          </div>
        </div>
      </div>
    </>
  )
}
