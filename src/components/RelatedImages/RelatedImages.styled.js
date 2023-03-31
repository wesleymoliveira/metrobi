import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.relatedImagesBackground};
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: start;
  `}
`;
