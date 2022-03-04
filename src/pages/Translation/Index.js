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
import ErrorMessage from '../../components/ErrorMessage'

const Translation = () => {
  const [wordData, setWordData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef()
  const { word } = useParams()

  const handlePlay = () => {
    audioRef.current.play()
  }

  useEffect(() => {
    setIsLoading(true)
    getWordTranslation(word)
      .then((response) => {
        const [firstElem] = response
        setWordData(firstElem)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [word])

  return (
    <>
      {!isLoading
        ? (
        <>
          {wordData
            ? (
            <TranslationContainer>
              <TransContData>
                <h1>{wordData.word}</h1>
                {wordData.phonetics.find(
                  (phonetics) => phonetics.text?.length > 0
                ) && (
                  <span>
                    {
                      wordData.phonetics.find(
                        (phonetics) => phonetics.text?.length > 0
                      ).text
                    }
                  </span>
                )}
                {wordData.phonetics.find(
                  (phonetics) => phonetics?.audio !== ''
                ) && (
                  <WordAudio onClick={handlePlay}>
                    <audio
                      ref={audioRef}
                      src={
                        wordData.phonetics.find(
                          (phonetics) => phonetics?.audio !== ''
                        ).audio
                      }
                    />
                    <GiSpeaker />
                  </WordAudio>
                )}
              </TransContData>
              <hr />
              <TransContMeaning>
                {wordData.meanings.map((element, index) => (
                  <div key={index}>
                    <h2>{element.partOfSpeech}</h2>
                    <ul>
                      {element.definitions.map((item, index) => (
                        <li key={index}>{item.definition}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </TransContMeaning>
            </TranslationContainer>
              )
            : (
            <ErrorMessage text={`No results found for ${word}`} />
              )}
        </>
          )
        : (
            ''
          )}
    </>
  )
}

export default Translation
