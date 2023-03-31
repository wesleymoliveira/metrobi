import React from 'react';
import { Footer, Header } from '../';

import * as S from './BaseLayout.styled';

export function BaseLayout({ children }) {
	return (
    <S.Wrapper data-testid='base-layout'>
			<Header />
      <S.Content>{children}</S.Content>
      <Footer /> 
    </S.Wrapper>
  );
}
