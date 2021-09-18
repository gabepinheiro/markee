import { RefObject } from 'react'
import { FileIcon } from 'ui/icons'
import * as S from './styles'
import marked from 'marked'
// import highligt from 'highlight.js'

import 'highlight.js/styles/github.css'
import { FileProps } from 'sidebar/types'

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
  selectedFile: FileProps
  handleChangeContent: (content: string) => void
  handleChangeFileName: (name: string) => void
}

function Content ({
  inputRef, selectedFile, handleChangeContent, handleChangeFileName,
}: ContentProps) {
  // const [content, setContent] = useState('')

  return (
    <S.ContentContainer>
      <S.Header>
        <S.InputWrapper>
          <S.Label htmlFor='fileName'>
            <FileIcon />
          </S.Label>
          <S.InputFileName
            ref={inputRef}
            type='text'
            id='fileName'
            value={selectedFile.name}
            onChange={(e) => handleChangeFileName(e.target.value)}
          />
        </S.InputWrapper>
      </S.Header>

      <S.MarkdownEditorContainer>
        <S.MarkdownTextArea
          placeholder='Digite aqui seu markdown'
          value={selectedFile.content}
          onChange={(e) => handleChangeContent(e.target.value)}
        />
      </S.MarkdownEditorContainer>

      <S.MarkdownPreview
        dangerouslySetInnerHTML={{ __html: marked(selectedFile.content ?? '') }}
      />
    </S.ContentContainer>
  )
}

export { Content }
