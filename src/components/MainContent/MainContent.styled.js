import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainContentBackground};
    flex: 5;
    display: flex;
    justify-content: center;
    align-items: start;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
`;
