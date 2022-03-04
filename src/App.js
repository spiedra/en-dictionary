import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App () {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
