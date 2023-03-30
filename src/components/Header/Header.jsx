import { Typography } from '../Typography/Typography';
import * as S from './Header.styled';

export function Header() {
	return (
		<S.Wrapper data-testid='header'>
			<Typography size='xxlarge'>
				Header
			</Typography>
		</S.Wrapper>
	);
}
