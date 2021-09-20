import { MouseEvent, useEffect, useRef, useState } from 'react'

import { FileProps } from 'sidebar/types'
import { v4 as uuidv4 } from 'uuid'

import localforage from 'localforage'

export function useFiles () {
  const [files, setFiles] = useState<FileProps[]>([])
  const [selectedFile, setSelectedFile] = useState<FileProps>({} as FileProps)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    async function getFilesStorage () {
      const filesStorage = await localforage.getItem<FileProps[]>('files')

      if (!filesStorage) {
        handleAddFile()
        return
      }

      setFiles([...filesStorage])

      const fileActive = filesStorage.find(file => file.active)

      if (fileActive) {
        setSelectedFile(fileActive)
        window.history.pushState(null, '', `/file/${fileActive.id}`)
      }
    }

    getFilesStorage()
  }, [])

  useEffect(() => {
    async function updateStorage () {
      if (files.length) {
        await localforage.setItem('files', files)
      }
    }

    updateStorage()
  }, [files])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (selectedFile.status === 'editing') {
      timer = setTimeout(() => {
        setSelectedFile(file => ({ ...file, status: 'saving' }))

        setTimeout(() => {
          setSelectedFile(file => ({ ...file, status: 'saved' }))
        }, 300)
      }, 300)
    }

    setFiles(files => (
      files.map(file => {
        if (file.id === selectedFile.id) {
          return ({ ...selectedFile, active: true })
        }

        return ({ ...file, active: false })
      })
    ))

    return () => clearTimeout(timer)
  }, [selectedFile])

  const handleSelectedFile = (file: FileProps) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    inputRef.current?.focus()

    setSelectedFile({ ...file, active: true })

    window.history.pushState(null, '', `/file/${file.id}`)
  }

  const handleChangeContent = (content: string) => {
    setSelectedFile(file => ({
      ...file,
      content,
      status: 'editing',
    }))
  }

  const handleChangeFileName = (name: string) => {
    setSelectedFile(file => ({
      ...file,
      name,
      status: 'editing',
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

    window.history.pushState(null, '', `/file/${newFile.id}`)
  }

  const handleRemoveFile = (id: string) => (
    setFiles(files => files.filter(file => file.id !== id))
  )

  return {
    files,
    selectedFile,
    inputRef,
    handleAddFile,
    handleRemoveFile,
    handleSelectedFile,
    handleChangeFileName,
    handleChangeContent,
  }
}
