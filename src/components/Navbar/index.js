import React from 'react'
import Search from '../Search'
import { Logo, Nav } from './styles'

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Logo to="/">
          EN<span>Dictionary</span>
        </Logo>
      </div>
      <Search />
    </Nav>
  )
}

export default Navbar
