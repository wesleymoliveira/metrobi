import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.footerBackground};
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
