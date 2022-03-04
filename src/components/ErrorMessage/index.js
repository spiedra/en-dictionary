import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { MessageContainer } from './styles'

const ErrorMessage = ({ text }) => {
  return (
    <MessageContainer>
      <h1>{text}</h1>
      <Link to="/">Go back</Link>
    </MessageContainer>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string
}

export default ErrorMessage
