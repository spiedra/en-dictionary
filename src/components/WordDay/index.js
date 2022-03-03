import React, { useEffect, useState, useRef } from 'react'

import { GiSpeaker } from 'react-icons/gi'
import { getWordDay } from '../../services/getWordDay'
import {
  DateContainer,
  FirstMarker,
  MeaningContainer,
  SectionWordDay,
  WordDataContainer,
  WordTitle,
  MeaningTitle,
  SecondMarker,
  WordAudio
} from './styles'

const WordDay = () => {
  const [wordData, setWordData] = useState()
  const audioRef = useRef()

  const handlePlay = () => {
    const audio = audioRef.current
    audio.play()
  }

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
              <WordAudio onClick={handlePlay}>
                <audio ref={audioRef} src={wordData.audio} />
                <GiSpeaker />
              </WordAudio>
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
