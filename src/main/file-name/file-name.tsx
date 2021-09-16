import { FileIcon } from 'ui/icons'
import * as S from './styles'

type FileNameSectionProps = {
  className?: string
}

export function Wrapper ({ className }: FileNameSectionProps) {
  return (
    <section className={className}>
      <S.InputWrapper>
        <S.Label htmlFor='fileName'>
          <FileIcon />
        </S.Label>
        <S.InputFileName type='text' id='fileName' defaultValue='README.md' />
      </S.InputWrapper>
    </section>
  )
}
