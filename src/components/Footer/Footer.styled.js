import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.footerBackground};
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
