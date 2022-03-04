import styled from 'styled-components'

export const TranslationContainer = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  padding: 1.5em 0;
  width: 85%;

  hr {
    width: 95%;

    @media ${(props) => props.theme.bp.tablet} {
      width: 100%;
    }
  }

  @media ${(props) => props.theme.bp.tablet} {
    width: 70%;
  }
`

export const TransContData = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;

  h1 {
    font-weight: bold;
    margin-right: 0.5em;
  }

  span {
    margin-right: 0.5em;
  }
`

export const TransContMeaning = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  div {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-weight: bold;
      font-size: 1.3em;
      margin-bottom: 0;
    }

    ul {
      margin-bottom: 0;
    }

    li {
      line-height: 28px;
      list-style: circle;
      margin-bottom: .8em;
    }
  }
`

export const WordAudio = styled.button`
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
