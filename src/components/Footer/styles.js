import styled from 'styled-components'

export const FooterContainer = styled.footer`
  ${(props) => props.theme.mixins.flexCenter}
  background-color: var(--title-color);
  height: 3em;

  span {
    color: var(--background-color);
    font-size: 13px;
  }
`
