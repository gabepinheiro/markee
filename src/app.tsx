import * as S from './app-styles'

import { Sidebar } from 'sidebar'
import { Content } from 'content'

function App () {
  return (
    <S.Container>
      <Sidebar />
      <Content />
    </S.Container>
  )
}

export { App }
