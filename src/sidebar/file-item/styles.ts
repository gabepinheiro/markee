import styled, { css } from 'styled-components/macro'

import { FileIcon } from 'ui/icons'
import { FileProps } from './types'

export const ButtonDelete = styled.button`
  ${() => css`
    background:none;
    border: 0;
    cursor: pointer;
    display: none;
    margin:0;
    padding:0;
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

type FileItemContainerProps = Pick<FileProps, 'active'>

export const FileItemContainer = styled.li<FileItemContainerProps>`
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
