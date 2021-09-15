import * as S from './styles'

import { File } from 'sidebar/file'

import { files } from './mock'

function ListFile () {
  return (
    <S.List>
      {files.map(({ id, name, content, active, status }) => (
        <File key={id} active={active} status={status} content={content}>
          {name}
        </File>
      ))}
    </S.List>
  )
}

export { ListFile }
