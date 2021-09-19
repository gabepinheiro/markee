import { ButtonFullWidth } from 'ui/button'
import { FileProps, StatusIconsProps } from './types'
import * as S from './styles'

import {
  DeleteIcon,
  EditingIcon,
  FileIcon,
  Logo,
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
  handleSelectedFile: (file: FileProps) => void
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
              onClick={(e) => {
                e.preventDefault()
                handleSelectedFile(file)
              }}
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
