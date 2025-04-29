import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Tarjeta from './Tarjeta'

function App() {

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Tarjeta image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRaxgqEVBX4jF4Ul3jzOJFElZY8eI6A57QA&s" name="superman" universe="DC" description="El más fuerte de todos los superhéroes" powers="Rayos X, volar, super fuerza" stats={[{ key: 'fuerza', value: 50 }, { key: 'velocidad', value: 100 }, { key: 'defensa', value: 400 }]}/>
      </main>
    </>
  )
}

export default App
