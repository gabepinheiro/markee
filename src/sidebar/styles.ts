import styled, { css } from 'styled-components/macro'
import { Logo } from 'ui/icons'
import { ButtonFullWidth } from 'ui/button'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    background: ${theme.colors.black};

    width:100%;
    height: 100%;

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

export const Title = styled.h2`
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
