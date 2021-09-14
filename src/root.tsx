import { theme } from 'resources/theme'
import { ThemeProvider, createGlobalStyle, css } from 'styled-components'
import { App } from './app'

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
    margin: 0;
    padding: 0;
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

  ${({ theme }) => css`
    body {
      font-size: 1.6rem;
      font-family: ${theme.font.family};
    }
  `}
`

export { Root }
