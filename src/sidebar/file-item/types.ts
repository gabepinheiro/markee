import { ReactNode } from 'react'

export type FileProps = {
  children?: ReactNode | ReactNode[]
  id?: string
  name?: string
  content?: string
  active?: boolean
  status?: 'editing' | 'saving' | 'saved'
}

export type StatusIconsProps = {
  editing: ReactNode
  saving: ReactNode
  saved: ReactNode
}
