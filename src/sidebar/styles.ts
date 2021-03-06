import styled, { css, keyframes } from 'styled-components/macro'
import media from 'styled-media-query'
import { FileIcon, SavingIcon } from 'ui/icons'
import { ButtonFullWidth } from 'ui/button'
import { FileProps } from 'resources/files/types'
import { Logo } from 'ui/logo'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    background: ${theme.colors.black};

    width:100%;
    height: 100%;

    padding: 26px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.lessThan('medium')`
      height: 40vh;
      justify-content: space-between;
    `}

    ${Logo} {
      margin-bottom: 50px;

      ${media.lessThan('medium')`
        margin-bottom: 20px;
    `}
    }

    ${ButtonFullWidth} {
      margin-bottom: 34px;

      ${media.lessThan('medium')`
        margin-bottom: 25px;
    `}
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

    ${media.lessThan('medium')`
      margin-bottom: 20px;
    `}

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

export const FileList = styled.ul`
  list-style: none;
  width:100%;
  margin: 0;
  padding: 0;

  display:flex;
  flex-direction: column;
  gap: 8px;

  ${media.lessThan('medium')`
    flex-direction: row;
    overflow: auto;
  `}
`

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

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

export const FileItemContainer = styled.li<FileItemContainerProps>`
  ${({ theme, active }) => css`
    color: ${theme.colors.white};
    border-radius: 6px;
    width:100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 14px;

    transition: background 300ms ease-in-out;

    ${media.lessThan('medium')`
      max-width:200px;

    `}

    ${FileName}{
      width: 30%;
      display: flex;
      align-items: center;
      height: 100%;
      overflow: hidden;
      -webkit-text-overflow: ellipsis;
      white-space: nowrap;
    }

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

    ${SavingIcon} {
      animation: ${rotation} 1s infinite linear;
    }
  `}
`
