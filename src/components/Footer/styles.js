import styled from 'styled-components'

export const FooterContainer = styled.footer`
  ${(props) => props.theme.mixins.flexCenter}
  height: 3em;

  span {
    font-size: 13px;
  }
`
