import styled, { css } from 'styled-components/macro'
import { Wrapper } from './markdown-editor'

export const MarkdownEditor = styled(Wrapper)`
  border-right: 2px solid rgba(30, 41, 59, 0.12);
  height: 95%;
  padding-right: 32px;
`

export const Markdown = styled.textarea`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border:0;
    color: ${theme.colors.black};
    font-family: "Inconsolata", monospace;
    font-size: ${theme.font.sizes.medium};
    line-height: 24px;
    opacity: 0.86;
    outline: none;
    resize: none;
    width: 100%;
    height: 100%;
  `}
`
