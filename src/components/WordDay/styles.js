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
