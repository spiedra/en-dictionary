import React from 'react'
import { Nav, Logo } from './styles'

const Navbar = () => {
  return (
    <Nav>
      <Logo href="/" rel="noreferrer">
        EN<span>Dictionary</span>
      </Logo>
    </Nav>
  )
}

export default Navbar
