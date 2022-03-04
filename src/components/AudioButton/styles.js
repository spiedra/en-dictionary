import styled from 'styled-components'

export const WordAudioBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding-left: 1em;

  svg {
    background-color: var(--neutral-color);
    border-radius: 50%;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    color: var(--title-color);
    cursor: pointer;
    font-size: 1.8em;
    justify-content: center;
    padding: 10px;
    transition: var(--main-transition);

    &:hover {
      transform: translateY(-3px);
    }
  }
`
