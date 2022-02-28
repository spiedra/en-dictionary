import styled from 'styled-components'

export const Nav = styled.nav`
  ${(props) => props.theme.mixins.flexCenter}
  background-color: var(--primary-color);
  padding: 1rem 0;
  width: 100%;

  div {
    align-self: flex-start;
    display: flex;
  }
`
export const Logo = styled.a`
  color: var(--neutral-color);
  font-size: 1.775rem;
  font-weight: 800;
  padding-left: 2rem;

  span {
    font-size: 1.375rem;
    font-weight: 300;
  }
`
