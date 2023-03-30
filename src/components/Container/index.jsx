import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({theme}) => css`
    width: 100%;
    max-width: ${theme.flex.container};
    margin-left: auto;
    margin-right: auto;
  `}
`
