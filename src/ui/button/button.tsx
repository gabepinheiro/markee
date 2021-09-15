import styled, { css } from 'styled-components/macro'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode | ReactNode[]
  className?: string
}

function Wrapper ({ children, className }: ButtonProps) {
  return <button className={className}>{children}</button>
}

export const Button = styled(Wrapper)`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: 3px;
    border: 0;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall};
    height: 33px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  `}
`

export const ButtonFullWidth = styled(Button)`
  width: 100%;
`
