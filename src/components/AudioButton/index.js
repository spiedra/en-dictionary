import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { WordAudioBtn } from './styles'
import { GiSpeaker } from 'react-icons/gi'

const AudioButton = ({ audioLink }) => {
  const audioRef = useRef()

  const handlePlay = () => {
    const audio = audioRef.current
    audio.play()
  }

  return (
    <WordAudioBtn onClick={handlePlay}>
      <audio ref={audioRef} src={audioLink} />
      <GiSpeaker />
    </WordAudioBtn>
  )
}

AudioButton.propTypes = {
  audioLink: PropTypes.string
}

export default AudioButton
