import styled, { css } from 'styled-components/macro'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: 32px;
  `}
`
