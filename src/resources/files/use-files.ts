import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'

import { FileProps } from './types'
import { v4 as uuidv4 } from 'uuid'

import localforage from 'localforage'

export function useFiles () {
  const [files, setFiles] = useState<FileProps[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    async function getFilesStorage () {
      const filesStorage = await localforage.getItem<FileProps[]>('files')

      if (!filesStorage) {
        handleAddFile()
        return
      }

      setFiles(filesStorage)

      const file = filesStorage.find(file => file.active)
      window.history.replaceState(null, '', `/file/${file?.id}`)
    }

    getFilesStorage()
  }, [])

  useEffect(() => {
    localforage.setItem('files', files)
  }, [files])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const file = files.find(file => file.active)

      if (!file || file.status !== 'editing') {
        return null
      }

      timer = setTimeout(() => {
        setFiles(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }

          return file
        }))

        setTimeout(() => {
          setFiles(files => files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }

            return file
          }))
        }, 300)
      }, 300)
    }

    updateStatus()

    return () => clearTimeout(timer)
  }, [files])

  const handleSelectedFile = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    inputRef.current?.focus()

    setFiles(files => files.map(file => {
      return {
        ...file,
        active: file.id === id,
      }
    }))

    const newFileActive = files.find(file => file.id === id)

    window.history.replaceState(null, '', `/file/${newFileActive?.id}`)
  }

  const handleChangeContent = (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()

    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          content: e.target.value,
          status: 'editing',
        }
      }

      return file
    }))
  }

  const handleChangeFileName = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          name: e.target.value,
          status: 'editing',
        }
      }

      return file
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

    setFiles(prevState => {
      const filesDisabled = prevState.map(file => ({ ...file, active: false }))
      return [...filesDisabled, newFile]
    })

    window.history.replaceState(null, '', `/file/${newFile.id}`)
  }

  const handleRemoveFile = (id: string) => (
    setFiles(files => files.filter(file => file.id !== id))
  )

  return {
    files,
    inputRef,
    handleAddFile,
    handleRemoveFile,
    handleSelectedFile,
    handleChangeFileName,
    handleChangeContent,
  }
}
