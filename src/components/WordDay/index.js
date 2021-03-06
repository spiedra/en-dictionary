import React, { useEffect, useState } from 'react'
import { getWordDay } from '../../services/getWordDay'
import AudioButton from '../AudioButton'
import {
  DateContainer,
  FirstMarker,
  MeaningContainer,
  SectionWordDay,
  WordDataContainer,
  WordTitle,
  MeaningTitle,
  SecondMarker
} from './styles'

const WordDay = () => {
  const [wordData, setWordData] = useState()

  useEffect(() => {
    getWordDay().then((response) => {
      setWordData(response)
    })
  }, [])

  return (
    <>
      {wordData
        ? (
        <SectionWordDay>
          <DateContainer>
            <span>Word of the Day:</span>
            <span>{wordData.date}</span>
          </DateContainer>
          <FirstMarker />
          <WordDataContainer>
            <div>
              <WordTitle>{wordData.word}</WordTitle>
              <AudioButton audioLink={wordData.audio} />
            </div>
            <div>
              <span>{wordData.category}</span>
              {'|'}
              <span>{wordData.pronunciation}</span>
            </div>
          </WordDataContainer>
          <SecondMarker />
          <MeaningContainer>
            <MeaningTitle>What it Means</MeaningTitle>
            <p>{wordData.meaning}</p>
          </MeaningContainer>
        </SectionWordDay>
          )
        : (
            ''
          )}
    </>
  )
}

export default WordDay
