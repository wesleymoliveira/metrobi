import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.headerBackground};
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
