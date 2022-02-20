import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        font-family: inherit;
        font: inherit;
    }

    html {
        scroll-behavior: smooth;
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
