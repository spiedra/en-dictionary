import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const SearchContainer = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  background-color: var(--primary-color);
  width: 100%;
`

export const SearchForm = styled.form`
  ${(props) => props.theme.mixins.flexCenter}
  border-radius: 10px;
  width: 80%;

  @media ${(props) => props.theme.bp.tablet} {
    width: 65%;
  }
`

export const SearchInput = styled.input`
  background-color: var(--background-color);
  border: none;
  border-bottom: 0.3rem solid transparent;
  border-radius: 4px 0px 0px 4px;
  height: var(--input-height);
  outline: none;
  padding: 0 0.625rem;
  width: 100%;
`

export const SearchButton = styled(Link)`
  appearance: button;
  background-color: var(--background-color);
  border: none;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
  padding: 0.55rem 0.8rem;
  transition: var(--main-transition);
`

export const SearchIcon = styled(AiOutlineSearch)`
  color: var(--primary-color);
  font-size: 1.5rem;
  transition: inherit;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`
