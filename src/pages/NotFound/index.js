import React from 'react'
import { Link } from 'react-router-dom'
import { NotFoundContainer } from './styles'

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>404 - Page not found</h1>
      <Link to='/'>Go back</Link>
    </NotFoundContainer>
  )
}

export default NotFound
