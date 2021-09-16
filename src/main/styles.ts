import styled, { css } from 'styled-components/macro'
import { FileNameSection } from './file-name'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: 0 32px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px auto;
    grid-row-gap: 16px;

    ${FileNameSection} {
      grid-column: 1 / 3;
      padding-top: 32px;
    }
  `}
`
