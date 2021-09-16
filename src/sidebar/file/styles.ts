import styled, { css } from 'styled-components/macro'
import { Wrapper } from './file'

import { FileIcon } from 'ui/icons'

export const ButtonDelete = styled.button`
  ${() => css`
    background:none;
    border: 0;
    cursor: pointer;
    display: none;
  }
`}`

export const FileName = styled.a`
  ${({ theme }) => css`
    flex-grow: 1;
    color: ${theme.colors.white};
    text-decoration: none;
    opacity: 0.6;
  `}
`

export const File = styled(Wrapper)`
  ${({ theme, active }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    border-radius: 6px;
    width:100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 14px;

    transition: background 300ms ease-in-out;

    ${FileIcon} {
      opacity: 0.6;
    }

    ${!active && css`
      &:hover {
        background: rgba(255, 255, 255, 0.05);

        ${FileIcon} {
          opacity: 1;
        }
      }

      &:hover ${FileName} {
        opacity: 1;
      }

      &:hover {
        ${ButtonDelete} {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 20px;
          width:20px;
        }
      }
    `}

    ${!!active && css`
      background: rgba(255, 255, 255, 0.05);
      color: ${theme.colors.primary};

      ${FileName} {
        opacity: 1;
      }
    `}
  `}
`
