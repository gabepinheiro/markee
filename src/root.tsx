import { theme } from 'resources/theme'
import { ThemeProvider } from 'styled-components'
import { App } from './app'

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export { Root }
