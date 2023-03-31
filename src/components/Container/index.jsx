import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({theme}) => css`
    flex: 1;
    //max-width: ${theme.flex.container};
    margin-left: auto;
    margin-right: auto;
  `}
`
