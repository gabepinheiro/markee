import { FileProps } from 'sidebar/file-item/types'

type File = Omit<FileProps, 'children'>

export const files: File[] = [
  {
    id: '1',
    name: 'README.md',
    content: '## Bootcamp React',
    active: false,
    status: 'editing',
  },
  {
    id: '2',
    name: 'CONTRIBUTING.md',
    content: '## Bootcamp React',
    active: false,
    status: 'editing',
  },
  {
    id: '3',
    name: 'LINCESE.md',
    content: '## Bootcamp React',
    active: false,
    status: 'editing',
  },
  {
    id: '4',
    name: 'Links.md',
    content: '## Bootcamp React',
    active: false,
    status: 'editing',
  },
  {
    id: '5',
    name: 'roadmap.md',
    content: '## Bootcamp React',
    active: true,
    status: 'editing',
  },
]
