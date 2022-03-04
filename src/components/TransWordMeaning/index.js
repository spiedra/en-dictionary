import React from 'react'
import PropTypes from 'prop-types'

const TransWordMeaning = ({ wordData }) => {
  return (
    <>
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
    </>
  )
}

TransWordMeaning.propTypes = {
  wordData: PropTypes.object
}

export default TransWordMeaning
