import { useRef } from 'react'
import * as S from './app-styles'

import { Sidebar } from 'sidebar'
import { Content } from 'content'

function App () {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <S.Container>
      <Sidebar inputRef={inputRef} />
      <Content inputRef={inputRef} />
    </S.Container>
  )
}

export { App }
