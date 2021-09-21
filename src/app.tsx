import * as S from './app-styles'

import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useFiles } from 'resources/files/use-files'

function App () {
  const {
    files,
    inputRef,
    handleAddFile,
    handleRemoveFile,
    handleSelectedFile,
    handleChangeFileName,
    handleChangeContent,
  } = useFiles()

  return (
    <S.Container>
      <Sidebar
        files={files}
        handleAddFile={handleAddFile}
        handleSelectedFile={handleSelectedFile}
        handleRemoveFile={handleRemoveFile}
      />
      <Content
        inputRef={inputRef}
        file={files.find(file => file.active)}
        handleChangeContent={handleChangeContent}
        handleChangeFileName={handleChangeFileName}
      />
    </S.Container>
  )
}

export { App }
