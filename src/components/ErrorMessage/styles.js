import styled from 'styled-components'

export const MessageContainer = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  font-size: 1.1em;
  padding: 8em 0;
  text-align: center;
  width: 90%;

  a {
    text-decoration: underline;

    &:hover {
      color: var(--primary-color);
    }
  }
`
