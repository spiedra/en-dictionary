import React from 'react'
import { SearchButton, SearchIcon, SearchInput } from './styles'

const Search = () => {
  return (
    <>
      <SearchInput type="text" />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </>
  )
}

export default Search
