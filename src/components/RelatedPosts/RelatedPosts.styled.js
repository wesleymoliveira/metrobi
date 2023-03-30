import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.relatedPostsBackground};
    width: 20%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: start;
    text-align: center;
    overflow: hidden;
  `}
`;
