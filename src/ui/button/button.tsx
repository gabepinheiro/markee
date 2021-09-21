import styled, { css } from 'styled-components/macro'

export const Button = styled.button`
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

  cursor: pointer;

  transition: 300ms ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.black};
    border: 1px solid ${theme.colors.primary};
  }
`}
`

export const ButtonFullWidth = styled(Button)`
  width: 100%;
`
