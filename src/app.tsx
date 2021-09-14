import styled, { css } from 'styled-components/macro'

function App () {
  return (
    <div>
      <Title>Markee app</Title>
    </div>
  )
}

const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary}
  `}
`

export { App }
