import { RefObject, useState } from 'react'
import { ButtonFullWidth } from 'ui/button'
import { Logo, PlusIcon } from 'ui/icons'
import { FileProps } from './file-item/types'
import { ListFile } from './list-file'
import { v4 as uuidv4 } from 'uuid'
import * as S from './styles'

type SidebarProps = {
  inputRef: RefObject<HTMLInputElement>
}

export function Sidebar ({ inputRef }: SidebarProps) {
  const [files, setFiles] = useState<FileProps[]>([])

  const handleAddFile = () => {
    inputRef.current?.focus()

    const newFile: FileProps = {
      id: uuidv4(),
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
