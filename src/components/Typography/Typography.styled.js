import styled, { css } from "styled-components";

export const wrapperModifiers = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  medium: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  large: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  xlarge: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,

  xxlarge: (theme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
};

export const Wrapper = styled.h1`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color]};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`;
