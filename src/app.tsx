import { Sidebar } from 'sidebar'
import { Main } from 'main'

import * as S from './app-styles'

function App () {
  return (
    <S.Container>
      <Sidebar />
      <Main />
    </S.Container>
  )
}

export { App }
