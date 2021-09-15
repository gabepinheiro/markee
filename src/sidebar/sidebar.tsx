import styled, { css } from 'styled-components/macro'

export function Sidebar () {
  return (
    <Wrapper>
      <h1>Markee app</h1>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  ${({ theme }) => css`
    background: ${theme.colors.black};
  `}
`
