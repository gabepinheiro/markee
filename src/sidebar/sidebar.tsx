import { MouseEvent } from 'react'
import { ButtonFullWidth } from 'ui/button'
import { FileProps, StatusIconsProps } from './types'
import * as S from './styles'

import {
  DeleteIcon,
  EditingIcon,
  FileIcon,
  PlusIcon,
  SavedIcon,
  SavingIcon,
} from 'ui/icons'
import { Logo } from 'ui/logo'

const statusIcons: StatusIconsProps = {
  editing: <EditingIcon />,
  saving: <SavingIcon />,
  saved: <SavedIcon />,
}

type SidebarProps = {
  files: FileProps[]
  handleAddFile: () => void
  handleSelectedFile: (file: FileProps) => (e: MouseEvent<HTMLAnchorElement>) => void
  handleRemoveFile: (id: string) => void
}

export function Sidebar ({
  files, handleAddFile, handleSelectedFile, handleRemoveFile,
}: SidebarProps) {
  return (
    <S.Wrapper>
      <Logo />

      <S.Title>Arquivos</S.Title>

      <ButtonFullWidth onClick={handleAddFile}>
        <PlusIcon />
        Adicionar arquivo
      </ButtonFullWidth>

      <S.List>
        {files.map((file) => (
          <S.FileItemContainer
            key={file.id}
            active={file.active}
          >
            <FileIcon />
            <S.FileName
              onClick={handleSelectedFile(file)}
            >
              {file.name}
            </S.FileName>

            {!file.active && (
              <S.ButtonDelete>
                <DeleteIcon onClick={() => handleRemoveFile(file.id)} />
              </S.ButtonDelete>
            )}

            {!!file.active && statusIcons[file.status]}
          </S.FileItemContainer>
        ))}
      </S.List>
    </S.Wrapper>
  )
}
