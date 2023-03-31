import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.relatedPostsBackground};
    flex: 1;
    justify-content: center;
    align-items: start;
    text-align: center;
    overflow: hidden;
  `}
`;
