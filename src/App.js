import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function App () {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default App
