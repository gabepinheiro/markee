import { useState, ChangeEvent } from 'react'
import { FileIcon } from 'ui/icons'
import * as S from './styles'
import marked from 'marked'
import highligt from 'highlight.js'

import 'highlight.js/styles/github.css'

marked.setOptions({
  highlight: (code, language) => {
    if (language && highligt.getLanguage(language)) {
      return highligt.highlight(code, { language }).value
    }

    return highligt.highlightAuto(code).value
  },
})

function Content () {
  const [content, setContent] = useState('')

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <S.ContentContainer>
      <S.Header>
        <S.InputWrapper>
          <S.Label htmlFor='fileName'>
            <FileIcon />
          </S.Label>
          <S.InputFileName type='text' id='fileName' defaultValue='Sem título' />
        </S.InputWrapper>
      </S.Header>

      <S.MarkdownEditorContainer>
        <S.MarkdownTextArea
          placeholder='Digite aqui seu markdown'
          value={content}
          onChange={handleChangeContent}
        />
      </S.MarkdownEditorContainer>

      <S.MarkdownPreview dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </S.ContentContainer>
  )
}

export { Content }
