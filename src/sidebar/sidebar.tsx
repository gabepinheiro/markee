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
}

export function Sidebar ({
  files, handleAddFile, handleSelectedFile,
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
            onClick={() => handleSelectedFile({ ...file })}
          >
            <FileIcon />
            <S.FileName>{file.name}</S.FileName>

            {!file.active && (
              <S.ButtonDelete>
                <DeleteIcon />
              </S.ButtonDelete>
            )}

            {!!file.active && statusIcons[file.status]}
          </S.FileItemContainer>
        ))}
      </S.List>
    </S.Wrapper>
  )
}
