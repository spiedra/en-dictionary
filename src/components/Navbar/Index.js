import React from 'react'
import { Nav, Logo } from './styles'

const Navbar = () => {
  return (
    <Nav>
      <a href='/' rel="noreferrer">
        <Logo>
          EN<span>Dictionary</span>
        </Logo>
      </a>
    </Nav>
  )
}

export default Navbar
