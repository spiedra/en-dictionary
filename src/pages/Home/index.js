import React from 'react'
import Search from '../../components/Search'
import WordDay from '../../components/WordDay'
import { SearchSection } from './styles'

const Home = () => {
  return (
    <SearchSection>
      <Search />
      <WordDay />
    </SearchSection>
  )
}

export default Home
