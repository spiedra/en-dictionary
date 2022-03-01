import styled from 'styled-components'

export const FooterContainer = styled.footer`
  ${(props) => props.theme.mixins.flexCenter}

  span {
    font-size: 13px;
    padding-bottom: 1.4rem;
  }
`
