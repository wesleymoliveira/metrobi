import React from 'react';
import { Footer, Container, Header } from '../';

import * as S from './BaseLayout.styled';

export function BaseLayout({ children }) {
	return (
    <S.Wrapper data-testid='base-layout'>
			<Container>
				<Header />
			</Container>

      <S.Content>{children}</S.Content>

      <Container>
         <Footer /> 
      </Container>
    </S.Wrapper>
  );
}
