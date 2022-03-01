import React from 'react'
import { useParams } from 'react-router-dom'

const Translation = () => {
  const { word } = useParams()

  return <h1>This is the translation of: {word}</h1>
}

export default Translation
