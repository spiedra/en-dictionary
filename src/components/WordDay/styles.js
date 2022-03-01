import styled from 'styled-components'

export const SectionWordDay = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  padding: 4rem 0;
  width: 85%;
`

export const DateContainer = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
`

export const FirstMarker = styled.hr`
  margin-top: 0.625em;
  width: 15%;
`

export const SecondMarker = styled.hr`
  margin-top: 1.3em;
  width: 85%;
`

export const WordDataContainer = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;

  div:nth-child(1) {
    ${(props) => props.theme.mixins.flexCenter}
  }
`

export const WordTitle = styled.h1`
  color: var(--title-color);
  font-size: 3.5em;
`
export const MeaningContainer = styled.div`
  ${(props) => props.theme.mixins.flexStart}
  flex-direction: column;
  text-align: start;
  width: 75%;
`

export const MeaningTitle = styled.h2`
  color: var(--title-color);
  font-size: 1.3em;
  font-weight: bold;
`

export const WordAudio = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding-left: 1em;

  svg {
    background-color: var(--input-color);
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
