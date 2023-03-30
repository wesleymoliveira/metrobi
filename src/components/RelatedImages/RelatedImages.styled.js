import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.relatedImagesBackground};
    width: 80%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: start;
  `}
`;
