import { useState } from 'react'
import { ButtonFullWidth } from 'ui/button'
import { Logo, PlusIcon } from 'ui/icons'
import { FileProps } from './file-item/types'
import { ListFile } from './list-file'

import * as S from './styles'

export function Sidebar () {
  const [files, setFiles] = useState<FileProps[]>([{
    id: '1',
    name: 'README.md',
    content: '## Bootcamp React',
    active: false,
    status: 'saved',
  },
  {
    id: '2',
    name: 'CONTRIBUTING.md',
    content: '## Como contribuir',
    active: true,
    status: 'saved',
  }])

  return (
    <S.Wrapper>
      <Logo />

      <S.Title>Arquivos</S.Title>

      <ButtonFullWidth>
        <PlusIcon />
        Adicionar arquivos
      </ButtonFullWidth>

      <ListFile files={files} />
    </S.Wrapper>
  )
}
