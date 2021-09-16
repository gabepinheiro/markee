import * as S from './styles'

type MarkdownEditorProps = {
  className?: string
}

export function Wrapper ({ className }: MarkdownEditorProps) {
  return (
    <section className={className}>
      <S.Markdown defaultValue='## Bootcamp Brainn Co.' />
    </section>
  )
}
