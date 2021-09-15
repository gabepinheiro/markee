import styled, { css } from 'styled-components/macro'
import { ButtonFullWidth } from 'ui/button'
import { Logo, PlusIcon } from 'ui/icons'

export function Sidebar () {
  return (
    <Wrapper>
      <Logo />
      <Title>Arquivos</Title>
      <ButtonFullWidth>
        <PlusIcon />
        Adicionar arquivos
      </ButtonFullWidth>
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
