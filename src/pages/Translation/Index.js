import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GiSpeaker } from 'react-icons/gi'
import { getWordTranslation } from '../../services/getWordTranslation'
import {
  TransContData,
  TransContMeaning,
  TranslationContainer,
  WordAudio
} from './styles'

const Translation = () => {
  const [wordData, setWordData] = useState()
  const audioRef = useRef()
  const { word } = useParams()

  const handlePlay = () => {
    audioRef.current.play()
  }

  useEffect(() => {
    getWordTranslation(word).then((response) => {
      const [firstElem] = response
      setWordData(firstElem)
    })
  }, [word])

  return (
    <>
      {wordData
        ? (
        <TranslationContainer>
          <TransContData>
            <h1>{wordData.word}</h1>
            <span>
              {
                wordData.phonetics.find(
                  (phonetics) => phonetics.text?.length > 0
                ).text
              }
            </span>
            <WordAudio onClick={handlePlay}>
              <audio
                ref={audioRef}
                src={
                  wordData.phonetics.find((phonetics) => phonetics.audio !== '')
                    .audio
                }
              ></audio>
              <GiSpeaker />
            </WordAudio>
          </TransContData>
          <hr />
          <TransContMeaning>
            {wordData.meanings.map((element, index) => (
              <div key={index}>
                <h2>{element.partOfSpeech}</h2>
                {element.definitions.map((item, index) => (
                  <ul key={index}>
                    <li>{item.definition}</li>
                  </ul>
                ))}
              </div>
            ))}
          </TransContMeaning>
        </TranslationContainer>
          )
        : (
            ''
          )}
    </>
  )
}

export default Translation
