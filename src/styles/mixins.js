import { css } from 'styled-components'

export const mixins = {
  flexCenter: css`
    align-items: center;
    display: flex;
    justify-content: center;
  `,

  flexStart: css`
    align-items: flex-start;
    display: flex;
    justify-content: center;
  `,

  flexEnd: css`
    align-items: flex-end;
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
