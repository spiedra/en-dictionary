import React, { useState } from 'react'
import { SearchButton, SearchIcon, SearchInput } from './styles'

const Search = () => {
  const [word, setWord] = useState('')

  const handleChange = (value) => {
    setWord(value)
  }

  return (
    <>
      <SearchInput
        type="text"
        value={word}
        onChange={(e) => handleChange(e.target.value)}
      />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </>
  )
}

export default Search
