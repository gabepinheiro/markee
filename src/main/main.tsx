import { FileNameSection } from './file-name'
// import { MarkdownEditor } from './markdown-editor'
import { MarkdownPreview } from './markdown-preview'
import * as S from './styles'

function Main () {
  return (
    <S.Wrapper>
      <FileNameSection />
      {/* <MarkdownEditor /> */}
      <MarkdownPreview />
    </S.Wrapper>
  )
}

export { Main }
