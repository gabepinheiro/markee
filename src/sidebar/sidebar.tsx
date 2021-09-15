import styled, { css } from 'styled-components/macro'
import { Logo } from 'ui/icons'

export function Sidebar () {
  return (
    <Wrapper>
      <Logo />
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
  `}
`
