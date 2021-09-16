import { FileIcon } from 'ui/icons'
import * as S from './styles'

function Content () {
  return (
    <S.ContentContainer>
      <S.Header>
        <S.InputWrapper>
          <S.Label htmlFor='fileName'>
            <FileIcon />
          </S.Label>
          <S.InputFileName type='text' id='fileName' defaultValue='README.md' />
        </S.InputWrapper>
      </S.Header>

      <S.MarkdownEditorContainer>
        <S.MarkdownTextArea defaultValue='## Bootcamp Brainn Co.' />
      </S.MarkdownEditorContainer>

      <S.MarkdownPreview>
        <h1>Bootcamp Brainn Co.</h1>
        <p>Lorem ipsum dolor sit amet simet</p>
      </S.MarkdownPreview>
    </S.ContentContainer>
  )
}

export { Content }
