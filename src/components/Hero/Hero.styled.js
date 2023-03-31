import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.heroBackground};
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: start;
  `}
`;
