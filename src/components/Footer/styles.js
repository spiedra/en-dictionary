import styled from 'styled-components'

export const FooterContainer = styled.footer`
  ${(props) => props.theme.mixins.flexCenter}
  background-color: var(--title-color);
  height: 10em;

  span {
    color: var(--neutral-color);
    font-size: 13px;
    padding-bottom: 1.4rem;
  }
`
