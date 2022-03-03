import React from 'react'
import Search from '../Search'
import { Nav, Logo } from './styles'

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
