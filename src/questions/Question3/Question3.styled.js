import styled, { css } from "styled-components";

export const ContentTopRow = styled.div`
  ${({theme}) => css`
    flex: 5;
    display: flex;
    gap: ${theme.spacings.gap};
		text-decoration: none;
  `}
`;

export const ContentBottomRow = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    gap: ${theme.spacings.gap};
  `}
`;

export const LeftColumn = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
		gap: ${theme.spacings.gap};
  `}
`;

export const RightColumn = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 2;
    flex-direction: column;
    gap: ${theme.spacings.gap};
  `}
`;
