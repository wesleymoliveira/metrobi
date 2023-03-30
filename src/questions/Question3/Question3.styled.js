import styled, { css } from "styled-components";

export const ContentTopRow = styled.div`
  ${({theme}) => css`
    display: flex;
    gap: ${theme.spacings.gap};
		height: 100%;
		text-decoration: none;
  `}
`;

export const ContentBottomRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.gap};
  `}
`;

export const LeftColumn = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 40%;
		height: 100%;
    flex-direction: column;
		gap: ${theme.spacings.gap};
  `}
`;

export const RightColumn = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 60%;
    flex-direction: column;
    gap: ${theme.spacings.gap};
  `}
`;
