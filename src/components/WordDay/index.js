import React, { useEffect } from 'react'
import { getRandomWord } from '../../services/getRandomWord'
import { SectionWordDay } from './styles'

const WordDay = () => {
  useEffect(() => {
    getRandomWord().then((response) => {
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
