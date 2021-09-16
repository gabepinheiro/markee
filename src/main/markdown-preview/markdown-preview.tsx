import styled, { css } from 'styled-components/macro'

type MarkdownPreviewProps = {
  className?: string
}

function Wrapper ({ className }: MarkdownPreviewProps) {
  return (
    <section className={className}>
      <h1>Bootcamp Brainn Co.</h1>
      <p>Lorem ipsum dolor sit amet simet</p>
    </section>
  )
}

const MarkdownPreview = styled(Wrapper)`
  ${({ theme }) => css`
    padding-left: 32px;
    color: rgba(30, 41, 59, 0.7);
    font-size: ${theme.font.sizes.medium};

    h1 {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.large};
    }
  `}
`

export { MarkdownPreview }
