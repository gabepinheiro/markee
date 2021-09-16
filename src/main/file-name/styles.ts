import styled, { css } from 'styled-components'

import { Wrapper } from './file-name'

export const FileNameSection = styled(Wrapper)``

export const InputWrapper = styled.div`
  display: flex;
`

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const InputFileName = styled.input`
  ${({ theme }) => css`
    background: none;
    border:0;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    padding:0 16px;
    outline: none;
  `}
`
