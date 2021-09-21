import { MouseEvent } from 'react'
import { ButtonFullWidth } from 'ui/button'
import { FileProps } from 'resources/files/types'
import { StatusIconsProps } from 'resources/status-icon-types'
import { Logo } from 'ui/logo'
import * as S from './styles'

import {
  DeleteIcon,
  EditingIcon,
  FileIcon,
  PlusIcon,
  SavedIcon,
  SavingIcon,
} from 'ui/icons'

const statusIcons: StatusIconsProps = {
  editing: <EditingIcon />,
  saving: <SavingIcon />,
  saved: <SavedIcon />,
}

type SidebarProps = {
  files: FileProps[]
  handleAddFile: () => void
  handleSelectedFile: (id: string) => (e: MouseEvent<HTMLAnchorElement>) => void
  handleRemoveFile: (id: string) => void
}

export function Sidebar ({
  files, handleAddFile, handleSelectedFile, handleRemoveFile,
}: SidebarProps) {
  return (
    <S.Wrapper>
      <Logo />

      <S.Title>Arquivos</S.Title>

      <ButtonFullWidth
        title='Adicionar novo arquivo'
        onClick={handleAddFile}
      >
        <PlusIcon />
        Adicionar arquivo
      </ButtonFullWidth>

      <S.FileList>
        {files.map((file) => (
          <S.FileItemContainer
            key={file.id}
            active={file.active}
          >
            <FileIcon />
            <S.FileName
              href={`/file/${file.id}`}
              onClick={handleSelectedFile(file.id)}
            >
              {file.name.length >= 13
                ? file.name.substring(0, 13) + '...'
                : file.name}
            </S.FileName>

            {!file.active && (
              <S.ButtonDelete
                title={`Remover o arquivo ${file.name}`}
                onClick={() => handleRemoveFile(file.id)}
              >
                <DeleteIcon />
              </S.ButtonDelete>
            )}

            {file.active && statusIcons[file.status]}
          </S.FileItemContainer>
        ))}
      </S.FileList>
    </S.Wrapper>
  )
}
