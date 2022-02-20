import { css } from 'styled-components'

export const mixins = {
  flexCenter: css`
    align-items: center;
    display: flex;
    justify-content: center;
  `,

  flexBetween: css`
    align-items: center;
    display: flex;
    justify-content: space-between;
  `,

  flexEvenly: css`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
  `
}
