import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    gap: ${theme.spacings.gap};
  `}
`;

export const Content = styled.main`
  ${({theme}) => css`
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.gap};
  `}
`;
