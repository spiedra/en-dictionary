import { createGlobalStyle } from 'styled-components'
import { variables } from './variables'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${variables}

    * {
        font-family: inherit;
        font: inherit;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-weight: normal;
        font-family: "Source Code Pro", monospace;
        background: var(--neutral-color);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    main {
        display: flex; 
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        min-height: 100vh;
        flex: 1;
    }
`
export default GlobalStyle
