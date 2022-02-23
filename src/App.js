import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Index'

function App () {
  return (
    <main>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default App
