import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getWordTranslation } from '../../services/getWordTranslation'
import {
  TransContData,
  TransContMeaning,
  TranslationContainer
} from './styles'
import ErrorMessage from '../../components/ErrorMessage'
import TransWordData from '../../components/TransWordData'
import TransWordMeaning from '../../components/TransWordMeaning'

const Translation = () => {
  const [wordData, setWordData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const { word } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getWordTranslation(word)
      .then((response) => {
        const [firstElem] = response
        setWordData(firstElem)
        setIsLoading(false)
      })
      .catch((e) => {
        setIsLoading(false)
        throw e.name
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
                <TransWordData wordData={wordData} />
              </TransContData>
              <hr />
              <TransContMeaning>
                <TransWordMeaning wordData={wordData} />
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
