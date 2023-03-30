import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.headerBackground};
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
