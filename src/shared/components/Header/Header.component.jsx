import React from 'react'
import './Header.component.css'

export default function Header() {
  return (
    <>
      <section className='header flex justify-between p-2'>
        <div className='icon'>
          Acá va un ícono :O
        </div>
        <div className='menu flex justify-around w-1/3'>
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
      </section>
    </>
  )
}
