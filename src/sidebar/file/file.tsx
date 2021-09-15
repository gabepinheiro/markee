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

function Wrapper ({
  children, className, active, status = 'editing',
}: FileProps) {
  return (
    <li className={className}>
      <FileIcon />
      <S.FileName>{children}</S.FileName>

      {!active && (
        <S.ButtonDelete>
          <DeleteIcon />
        </S.ButtonDelete>
      )}

      {!!active && statusIcons[status]}
    </li>
  )
}

export { Wrapper }
