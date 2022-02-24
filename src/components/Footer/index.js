import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  ${(props) => props.theme.mixins.flexCenter}

  span {
    font-size: 13px;
    padding-bottom: 1.4rem;
  }
`
const Footer = () => {
  return (
    <FooterContainer>
      <span>
        <a href="https://www.jcspiedra.com/" target="_blank" rel="noreferrer">
          Jcspiedra
        </a>{' '}
        - San José, Costa Rica 2022
      </span>
    </FooterContainer>
  )
}

export default Footer
