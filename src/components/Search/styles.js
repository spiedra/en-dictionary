import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchInput = styled.input`
  background-color: var(--input-color);
  border: none;
  border-bottom: 0.3rem solid transparent;
  border-radius: 0.2rem;
  height: var(--input-height);
  outline: none;
  padding: 0 0.625rem;
  width: 60%;
`

export const SearchButton = styled.button`
  background-color: var(--primary-color);
  border: none;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
  height: 45px;
  padding: 0.7rem 0.8rem;
`

export const SearchIcon = styled(AiOutlineSearch)`
  color: var(--neutral-color);
  font-size: 1.5rem;
  transition: var(--main-transition);

  &:hover {
    transform: scale(1.2);
  }
`
