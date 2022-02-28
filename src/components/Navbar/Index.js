import React from 'react'
import Search from '../../components/Search'
import { Nav, Logo } from './styles'

const Navbar = () => {
  return (
    <Nav>
      <div>
      <Logo href="/" rel="noreferrer">
        EN<span>Dictionary</span>
      </Logo>
      </div>
      <Search/>
    </Nav>
  )
}

export default Navbar
