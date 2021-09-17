import { theme } from 'resources/theme'
import { ThemeProvider, createGlobalStyle, css } from 'styled-components'
import { App } from './app'

import 'normalize.css'

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  #root {
    width:100%;
    height: 100vh;
  }

  ${({ theme }) => css`
    body {
      font-size: 1.6rem;
      font-family: ${theme.font.family};
      color: ${theme.colors.black};
    }
  `}
`

export { Root }
