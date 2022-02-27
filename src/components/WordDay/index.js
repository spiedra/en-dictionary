import React, { useEffect } from 'react'
import { getWordDay } from '../../services/getWordDay'
import { SectionWordDay } from './styles'

const WordDay = () => {
  useEffect(() => {
    getWordDay().then((response) => {
      console.log(response)
    })
  }, [])

  return (
    <SectionWordDay>
      <h1>Word of the day</h1>
      <div>
        <h2>WordTest</h2>
      </div>
    </SectionWordDay>
  )
}

export default WordDay
