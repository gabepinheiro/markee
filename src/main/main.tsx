import { FileNameSection } from './file-name'
import { MarkdownEditor } from './markdown-editor'
import * as S from './styles'

function Main () {
  return (
    <S.Wrapper>
      <FileNameSection />
      <MarkdownEditor />
    </S.Wrapper>
  )
}

export { Main }
