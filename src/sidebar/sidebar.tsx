import styled, { css } from 'styled-components/macro'
import { ButtonFullWidth } from 'ui/button'
import { Logo, PlusIcon, FileIcon } from 'ui/icons'

export function Sidebar () {
  return (
    <Wrapper>
      <Logo />
      <Title>Arquivos</Title>
      <ButtonFullWidth>
        <PlusIcon />
        Adicionar arquivos
      </ButtonFullWidth>

      <ListFile>
        <File>
          <FileIcon />
          <FileName>README.md</FileName>
        </File>
        <File>
          <FileIcon />
          <FileName>CONTRIBUTING.md</FileName>
        </File>
        <File>
          <FileIcon />
          <FileName>LICENSE.md</FileName>
        </File>
        <File>
          <FileIcon />
          <FileName>Links.md</FileName>
        </File>
        <File>
          <FileIcon />
          <FileName>roadmap.md</FileName>
        </File>
      </ListFile>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  ${({ theme }) => css`
    background: ${theme.colors.black};

    padding: 0 32px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${Logo} {
      margin-top: 47px;
      margin-bottom: 50px;
    }

    ${ButtonFullWidth} {
      margin-bottom: 34px;
    }
  `}
`

const Title = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};

    margin-bottom: 35px;

    display: flex;
    align-items:center;
    gap:6px;

    ::before {
      background: ${theme.colors.primary};
      content: '';
      height: 2px;
      width: 14px;
    }

    ::after {
      background: ${theme.colors.primary};
      content: '';
      flex-grow: 1;
      height: 2px;
    }
  `}
`

const ListFile = styled.ul`
  list-style: none;
  width:100%;
  margin-bottom: 47px;
`

const FileName = styled.a`
  ${({ theme }) => css`
    flex-grow: 1;
    color: ${theme.colors.white};
    text-decoration: none;
    opacity: 0.6;
  `}
`

const File = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    border-radius: 6px;
    width:100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 14px;

    ${FileIcon} {
      opacity: 0.6;
    }
  `}
`
