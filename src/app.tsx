import { useEffect, useRef, useState } from 'react'
import * as S from './app-styles'

import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { FileProps } from './sidebar/types'
import { v4 as uuidv4 } from 'uuid'

function App () {
  const [files, setFiles] = useState<FileProps[]>([])
  const [selectedFile, setSelectedFile] = useState<FileProps>({} as FileProps)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setFiles(files => (
      files.map(file => {
        if (file.id === selectedFile.id) {
          return ({ ...selectedFile, active: true })
        }

        return ({ ...file, active: false })
      })
    ))
  }, [selectedFile])

  const handleSelectedFile = (file: FileProps) => {
    inputRef.current?.focus()

    setSelectedFile({ ...file })
  }

  const handleChangeContent = (content: string) => {
    setSelectedFile(file => ({
      ...file,
      content,
    }))
  }

  const handleChangeFileName = (name: string) => {
    setSelectedFile(file => ({
      ...file,
      name,
    }))
  }

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

    setSelectedFile({ ...newFile })
  }

  return (
    <S.Container>
      <Sidebar
        files={files}
        handleAddFile={handleAddFile}
        handleSelectedFile={handleSelectedFile}
      />
      <Content
        inputRef={inputRef}
        selectedFile={selectedFile}
        handleChangeContent={handleChangeContent}
        handleChangeFileName={handleChangeFileName}
      />
    </S.Container>
  )
}

export { App }
