import { ButtonFullWidth } from 'ui/button'
import { Logo, PlusIcon } from 'ui/icons'
import { ListFile } from './list-file'

import * as S from './styles'

export function Sidebar () {
  return (
    <S.Wrapper>
      <Logo />

      <S.Title>Arquivos</S.Title>

      <ButtonFullWidth>
        <PlusIcon />
        Adicionar arquivos
      </ButtonFullWidth>

      <ListFile />
    </S.Wrapper>
  )
}
