import * as S from './styles'
import { FileProps, StatusIconsProps } from './types'

import {
  DeleteIcon,
  FileIcon,
  EditingIcon,
  SavingIcon,
  SavedIcon,
} from 'ui/icons'

const statusIcons: StatusIconsProps = {
  editing: <EditingIcon />,
  saving: <SavingIcon />,
  saved: <SavedIcon />,
}

function FileItem ({
  children, active, status = 'editing',
}: FileProps) {
  return (
    <S.FileItemContainer active={active}>
      <FileIcon />
      <S.FileName>{children}</S.FileName>

      {!active && (
        <S.ButtonDelete>
          <DeleteIcon />
        </S.ButtonDelete>
      )}

      {!!active && statusIcons[status]}
    </S.FileItemContainer>
  )
}

export { FileItem }
