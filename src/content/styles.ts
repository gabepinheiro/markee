import styled, { css } from 'styled-components/macro'

export const ContentContainer = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: 0 32px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px auto;
    grid-row-gap: 16px;

    overflow: hidden;
  `}
`

export const Header = styled.section`
  grid-column: 1 / 3;
  padding-top: 32px;
`

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
    width:100%;
  `}
`

export const MarkdownEditorContainer = styled.section`
  border-right: 2px solid rgba(30, 41, 59, 0.12);
  height: 95%;
  /* padding-right: 32px; */
`

export const MarkdownTextArea = styled.textarea`
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

export const MarkdownPreview = styled.section`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    padding-left: 32px;
    height: 95%;
    overflow: auto;

    /* h1 {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.large};
    } */

    h1, h2, h3, h4, h5, h6 {
      margin-top: 0;
    }
  `}
`
