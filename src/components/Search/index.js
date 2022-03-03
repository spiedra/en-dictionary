import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import {
  SearchContainer,
  SearchButton,
  SearchForm,
  SearchIcon,
  SearchInput
} from './styles'

const Search = () => {
  const [word, setWord] = useState('')
  const navigate = useNavigate()

  const handleChange = (value) => {
    setWord(value)
  }

  const handleKeyPress = (target, value) => {
    if (target.charCode === 13) {
      navigate(`/translation/${value}`)
    }
  }

  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput
          type="text"
          value={word}
          onChange={(e) => handleChange(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e, e.target.value)}
        />
        <SearchButton to={`/translation/${word}`}>
          <SearchIcon />
        </SearchButton>
      </SearchForm>
    </SearchContainer>
  )
}

export default Search
