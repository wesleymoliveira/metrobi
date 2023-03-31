import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    gap: ${theme.spacings.gap};
    //max-width: ${theme.flex.container};
  `}
`;

export const Content = styled.main`
  ${({theme}) => css`
    flex: 8;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.gap};
  `}
`;
