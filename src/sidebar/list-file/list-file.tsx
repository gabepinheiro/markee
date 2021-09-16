import * as S from './styles'

import { FileItem } from 'sidebar/file-item'

import { files } from './mock'

function ListFile () {
  return (
    <S.List>
      {files.map(({ id, name, content, active, status }) => (
        <FileItem key={id} active={active} status={status} content={content}>
          {name}
        </FileItem>
      ))}
    </S.List>
  )
}

export { ListFile }
