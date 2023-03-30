import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.sidebarBackground};
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: start;
  `}
`;
