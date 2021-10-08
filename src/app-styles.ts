import styled from 'styled-components/macro'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 300px auto;

  ${media.lessThan('medium')`
    display: block;
  `}
`
