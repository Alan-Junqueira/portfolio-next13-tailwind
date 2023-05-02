'use client'

import { useState } from 'react'

export const MenuBurger = () => {
  const [menuBurgerOpen, setMenuBurgerOpen] = useState(false)
  return (
    <nav className="flex sm:hidden flex-col">
      <button onClick={() => setMenuBurgerOpen(!menuBurgerOpen)}>Burger</button>
      {menuBurgerOpen ? (
        <div className="absolute inset-0 h-screen bg-red-400">
          <p>Aberto</p>
        </div>
      ) : (
        <p>Está fechado</p>
      )}
    </nav>
  )
}
