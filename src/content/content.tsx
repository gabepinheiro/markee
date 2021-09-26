import { RefObject, ChangeEvent, useEffect } from 'react'
import { FileIcon } from 'ui/icons'
import { FileProps } from 'resources/files/types'
import * as S from './styles'
import marked from 'marked'

import 'highlight.js/styles/atom-one-dark.css'

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
  file?: FileProps
  handleChangeContent: (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => void
  handleChangeFileName: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
}

function Content ({
  inputRef, file, handleChangeContent, handleChangeFileName,
}: ContentProps) {
  useEffect(() => {
    async function loadHljs () {
      const { default: h } = await import('highlight.js')

      h.configure({ ignoreUnescapedHTML: true })
      h.highlightAll()
    }

    loadHljs()
  })

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
