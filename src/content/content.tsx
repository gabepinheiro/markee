import { RefObject, ChangeEvent } from 'react'
import { FileIcon } from 'ui/icons'
import { FileProps } from 'resources/files/types'
import * as S from './styles'
import marked from 'marked'

import 'highlight.js/styles/github.css'

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
  file?: FileProps
  handleChangeContent: (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => void
  handleChangeFileName: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
}

function Content ({
  inputRef, file, handleChangeContent, handleChangeFileName,
}: ContentProps) {
  if (!file) {
    return null
  }

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
            value={file.name}
            onChange={handleChangeFileName(file.id)}
            autoFocus
          />
        </S.InputWrapper>
      </S.Header>

      <S.MarkdownEditorContainer>
        <S.MarkdownTextArea
          placeholder='Digite aqui seu markdown'
          value={file.content}
          onChange={handleChangeContent(file.id)}
        />
      </S.MarkdownEditorContainer>

      <S.MarkdownPreview
        dangerouslySetInnerHTML={{ __html: marked(file.content) }}
      />
    </S.ContentContainer>
  )
}

export { Content }
