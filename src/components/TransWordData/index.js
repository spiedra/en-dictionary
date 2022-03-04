import React from 'react'
import PropTypes from 'prop-types'
import AudioButton from '../AudioButton'

const TransWordData = ({ wordData }) => {
  return (
    <>
      <h1>{wordData.word}</h1>
      {wordData.phonetics.find((phonetics) => phonetics.text?.length > 0) && (
        <span>
          {
            wordData.phonetics.find((phonetics) => phonetics.text?.length > 0)
              .text
          }
        </span>
      )}
      {wordData.phonetics.find((phonetics) => phonetics?.audio !== '') && (
        <AudioButton
          audioLink={
            wordData.phonetics.find((phonetics) => phonetics?.audio !== '')
              .audio
          }
        />
      )}
    </>
  )
}

TransWordData.propTypes = {
  wordData: PropTypes.object
}

export default TransWordData
