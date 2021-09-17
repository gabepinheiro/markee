import { useState } from 'react'
import { ButtonFullWidth } from 'ui/button'
import { Logo, PlusIcon } from 'ui/icons'
import { FileProps } from './file-item/types'
import { ListFile } from './list-file'

import * as S from './styles'

export function Sidebar () {
  const [files, setFiles] = useState<FileProps[]>([])

  const handleAddFile = () => {
    const newFile: FileProps = {
      id: '1',
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    setFiles(prev => {
      const prevState = prev.map(file => ({ ...file, active: false }))

      return [...prevState, newFile]
    })
  }

  return (
    <S.Wrapper>
      <Logo />

      <S.Title>Arquivos</S.Title>

      <ButtonFullWidth onClick={handleAddFile}>
        <PlusIcon />
        Adicionar arquivo
      </ButtonFullWidth>

      <ListFile files={files} />
    </S.Wrapper>
  )
}
