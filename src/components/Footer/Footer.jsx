import React from 'react'
import * as S from './Footer.styled'
import { Typography } from '../Typography/Typography';

export const Footer = () => (
  <S.Wrapper data-testid='footer'>
    <Typography size='xxlarge'>
      Footer
    </Typography>
  </S.Wrapper>
);
