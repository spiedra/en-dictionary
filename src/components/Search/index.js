import React, { useState } from 'react'
import { SearchContainer, SearchButton, SearchForm, SearchIcon, SearchInput } from './styles'

const Search = () => {
  const [word, setWord] = useState('')

  const handleChange = (value) => {
    setWord(value)
  }

  return (
   <SearchContainer>
      <SearchForm>
      <SearchInput
        type="text"
        value={word}
        onChange={(e) => handleChange(e.target.value)}
      />
      <SearchButton to={`/translation/${word}`}>
        <SearchIcon />
      </SearchButton>
    </SearchForm>
   </SearchContainer>
  )
}

export default Search
