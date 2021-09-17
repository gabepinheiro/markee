import { useState, ChangeEvent } from 'react'
import { FileIcon } from 'ui/icons'
import * as S from './styles'
import marked from 'marked'
// import highligt from 'highlight.js'

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
