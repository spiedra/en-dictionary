import styled from 'styled-components'

export const SectionWordDay = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  padding: 4rem 0;
  width: 85%;
`

export const DateContainer = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;

  span:nth-child(1) {
    margin-bottom: 0.3em;
  }

  @media ${(props) => props.theme.bp.tablet} {
    font-size: 1.1em;
    flex-direction: row;

    span:nth-child(1) {
      margin-right: 0.5em;
      margin-bottom: 0;
    }
  }
`

export const FirstMarker = styled.hr`
  margin-top: 0.625em;
  width: 45%;

  @media ${(props) => props.theme.bp.tablet} {
    width: 22%;
  }
`

export const SecondMarker = styled.hr`
  margin-top: 1.3em;
  width: 95%;

  @media ${(props) => props.theme.bp.tablet} {
    width: 85%;
  }
`

export const WordDataContainer = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;

  div:nth-child(1) {
    ${(props) => props.theme.mixins.flexCenter}
    flex-wrap: wrap;
  }

  div:nth-child(2) {
    ${(props) => props.theme.mixins.flexCenter}
    flex-wrap: wrap;
    font-size: 0.9em;

    @media ${(props) => props.theme.bp.tablet} {
      font-size: 1.1em;
    }
  }
`

export const WordTitle = styled.h1`
  color: var(--title-color);
  font-size: 2em;

  @media ${(props) => props.theme.bp.tablet} {
    font-size: 3.5em;
  }
`
export const MeaningContainer = styled.div`
  ${(props) => props.theme.mixins.flexStart}
  flex-direction: column;
  text-align: start;
  width: 90%;

  @media ${(props) => props.theme.bp.tablet} {
    width: 75%;
  }
`

export const MeaningTitle = styled.h2`
  color: var(--title-color);
  font-size: 1.3em;
  font-weight: bold;
`
